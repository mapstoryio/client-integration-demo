//const EXPO_URL = "https://expo.demo.mapstory.io";

if (!window.messageHandlerAttached) {
  //  const EXPO_URL = "https://fjordlandet.mapstory.io";
//  const EXPO_URL = "http://lhaemkm.maplegend.8082.exp.direct";
  const EXPO_URL = "https://expo.demo.mapstory.io";
  let divs = document.querySelectorAll("[data-mapstory-target-overlay-blur]");

  for (let d of divs) {
    d.remove();
  }
  window.messageHandlerAttached = true;

  const cards = document.querySelectorAll(
    "[data-mapstory-slug],[data-mapstory]"
  );
  for (const ca of cards) {
    const slug = ca.dataset.mapstorySlug
      ? ca.dataset.mapstorySlug
      : "til-den-ol-torstige";

    //  if (slug === "til-den-fugleinteresserede") {
    if (slug === "til-den-ol-torstige") {
      const img = document.createElement("img");
      img.setAttribute(
        "style",
        "width: 100%; aspect-ratio: 1; object-fit: cover;"
      );
      img.setAttribute(
        "src",
        EXPO_URL + "/api/image/area/til-den-ol-torstige" // + slug
      );
      ca.textContent = "";

      ca.appendChild(img);
    }

    ca.onclick = (event) => {
      event.preventDefault();

      window.location.hash = "#mapstory-" + slug;
    };
  }

  const hash = window.location.hash;
  if (hash === "#-") {
    let leafletContainer = document.querySelector(".leaflet-map");

    const frameOverview = document.createElement("iframe");
    frameOverview.setAttribute("style", "aspect-ratio:1; width:100%");
    frameOverview.setAttribute(
      "src",
      EXPO_URL + "/guide/fjordlandet/aktiv-i-naturen?mode=map_only"
    );

    leafletContainer.replaceWith(frameOverview);
  }

  var nextId = 0;
  const prepareNewFrame = () => {
    const sFrame =
      "border-bottom-radius:50px;transition: bottom 0.4s; position: fixed; z-index:999999; width:100vw; height: 100%; bottom:-100vh; right:0px; left: 0px;  overflow: hidden";

    const iframe = document.createElement("iframe");
    iframe.setAttribute("id", "mapstory-frame-ready");
    iframe.setAttribute(
      "src",
      EXPO_URL + "/guide/fjordlandet/aktiv-i-naturen?mode=map_only"
    );
    iframe.setAttribute("frameBorder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("allow", "geolocation");
    iframe.setAttribute("data-mapstory-target-iframe", "true");

    iframe.setAttribute("style", sFrame);

    const body = document.querySelector("body");
    body.setAttribute("style", "transition: margin 0.4s;");

    body.appendChild(iframe);
  };

  prepareNewFrame(nextId);

  const hashHandler = (hash) => {
    const html = document.querySelector("html");

    if (hash.includes("mapstory-")) {
      const iframe = document.querySelector("#mapstory-frame-ready");
      iframe.setAttribute("id", "mapstory-frame-in-use");

      prepareNewFrame();
      iframe.setAttribute("data-original-style", iframe.getAttribute("style"));
      iframe?.setAttribute(
        "style",
        iframe.getAttribute("style") + ";bottom:0px"
      );
      const slug = hash.slice(10);
      //   alert(slug);
      iframe.contentWindow.postMessage(
        { type: "replace_route", value: slug },
        "*"
      );

      html.setAttribute("data-original-style", html.getAttribute("style"));
      html.setAttribute(
        "style",
        html.getAttribute("style") + "; overflow:hidden"
      );
    } else {
      const iframe = document.querySelector("#mapstory-frame-in-use");
      iframe.setAttribute(
        "src",
        EXPO_URL + "/guide/fjordlandet/aktiv-i-naturen?mode=map_only"
      );
      html.setAttribute("style", html.getAttribute("data-original-style"));
      iframe.setAttribute("style", iframe.getAttribute("data-original-style"));
      setTimeout(() => {
        iframe.remove();
      }, 500);
    }
  };

  window.addEventListener("message", (event) => {
    event.preventDefault();
    const obj = event;

    if (obj.data.type === "mapstory-expand") {
      window.location.hash = "#mapstory-" + obj.data.slug;
    }
    if (obj.data.type === "mapstory-collapse") {
      var prevUrl = window.location.href.split("#")[0];
      window.location.hash = "-";
    }
  });

  window.addEventListener("hashchange", (ev) => {
    const hash = ev.target.location.hash;

    hashHandler(hash);
  });
}

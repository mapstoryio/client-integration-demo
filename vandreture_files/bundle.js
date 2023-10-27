if (!window.makeFrame) {
  const makeFrame = (src) => {}

  if (!window.messageHandlerAttached) {
    window.messageHandlerAttached = true
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth

    const cards = document.querySelectorAll('[data-mapstory-type],[data-mapstory]')
    for (const ca of cards) {
      console.log(ca.getAttribute('href'))
      ca.onclick = function (evt) {
        evt.preventDefault()

      }
    }

    const c = cards[0]
    const src = c.getAttribute('href')
    const div = document.createElement('div')
    div.setAttribute(
      'style',
      'position: fixed;  z-index:-99999; width:100vw; height: 100vh; top:-200vh; right:0px; left: 0px; bottom: 0px; backdrop-filter: blur(10px) brightness(60%); overflow: hidden'
    )
    const iframe = document.createElement('iframe')

    div.setAttribute('data-mapstory-target-div', 'true')
    iframe.setAttribute('src', src +"/overlay" )
    iframe.setAttribute('frameBorder', '0')
    iframe.setAttribute('scrolling', 'no')
    iframe.setAttribute('allow', 'geolocation')
    iframe.setAttribute('data-mapstory-target-iframe', 'true')
    iframe.setAttribute(
      'style',
      ' width: 100%; margin: auto; box-shadow: 10px 0px 20px #00000077, -10px 0px 20px #00000077; height: 100%; overflow: hidden;'
    )
    const body = document.querySelector('body')
    //  return iframe
    div.appendChild(iframe)
    body.appendChild(div)

    window.addEventListener('message', (event) => {
      try {
        const obj = event

        if (obj.data.type === 'frameReady') {
          const cards = document.querySelectorAll('[data-mapstory-type],[data-mapstory]')
          for (const ca of cards) {
            ca.onclick = function (evt) {
              evt.preventDefault()

              let frame = document.querySelector(
                '[data-mapstory-target-iframe]'
              )
              frame.contentWindow.postMessage(ca.getAttribute('href'), '*')
//              frame.contentWindow.postMessage({type:ca.dataset.mapstoryType, slug: ca.dataset.mapstorySlug}, '*')
              let list = document.querySelector('[data-mapstory-target-div]')

              // Move stuff
              list.setAttribute(
                'style',
                'position: fixed;  z-index:99999; width:100vw; height: 100vh; top:0px; right:0px; left: 0px; bottom: 0px; backdrop-filter: blur(10px) brightness(60%); overflow: hidden'
              )
            }
          }

          let divs = document.querySelectorAll(
            '[data-mapstory-target-overlay-blur]'
          )

          for (let d of divs) {
            d.remove()
          }
        }
        if (obj.data.type === 'closeRequest') {
          let div = document.querySelector('[data-mapstory-target-div]')

          let frame = document.querySelector('[data-mapstory-target-iframe]')

          // Move stuff
          div.setAttribute(
            'style',
            'position: fixed;  z-index:-99999; width:100vw; height: 100vh; top:-200vh; right:0px; left: 0px; bottom: 0px'
          )
        }
        if (obj.data.type === 'focusRequest') {
          //     alert("hej fra bundle")
          let frame = document.querySelector('[data-mapstory-target-iframe]')
          frame.contentWindow.postMessage(obj.data.slug, '*')
          let list = document.querySelector('[data-mapstory-target-div]')

          // Move stuff
          list.setAttribute(
            'style',
            'position: fixed;  z-index:99999; width:100vw; height: 100vh; top:0px; right:0px; left: 0px; bottom: 0px; backdrop-filter: blur(10px) brightness(60%); overflow: hidden'
          )
        }
      } catch (error) {}
    })
  }
}

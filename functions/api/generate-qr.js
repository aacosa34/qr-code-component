import qr from 'qrcode'
export async function onRequestPost(context) {
    //     // Contents of context object
    //   const {
        //     request, // same as existing Worker API
        //     env, // same as existing Worker API
        //     params, // if filename includes [id] or [[path]]
        //     waitUntil, // same as ctx.waitUntil in existing Worker API
        //     next, // used for middleware or to fetch assets
        //     data, // arbitrary space for passing data between middlewares
        //   } = context;

  const { request } = context;
  console.log(request)

  const rawBody = await request.text()

  const { url } = JSON.parse(rawBody)
        
  const qrImage = await qr.toString(url, {
      type:'svg',
      color: {
        light: '#3685ff',
        dark: '#ffffff'
      }
    }
  )

  // send a response that is a json object
    return new Response (JSON.stringify({svg: qrImage}), {
        headers: {
            'content-type': 'application/json',
        }
    })

}

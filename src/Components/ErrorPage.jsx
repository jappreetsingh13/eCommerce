import React from 'react'

function ErrorPage() {
  return (
    <>
      <div className='flex flex-col gap-y-8 justify-center items-center mt-20'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="150.203" height="150.204" viewBox="0 0 150.203 150.204"><g transform="translate(-0.001)"><g transform="translate(0.001)"><path d="M75.1,0a75.1,75.1,0,1,0,75.1,75.1A75.187,75.187,0,0,0,75.1,0Zm0,144.835A69.733,69.733,0,1,1,144.836,75.1,69.812,69.812,0,0,1,75.1,144.835Z" transform="translate(-0.001)" /></g><g transform="translate(18.738 49.611)"><path d="M83.731,169.109a19.862,19.862,0,1,0,19.862,19.862A19.884,19.884,0,0,0,83.731,169.109Zm0,34.356a14.494,14.494,0,1,1,14.494-14.494A14.51,14.51,0,0,1,83.731,203.465Z" transform="translate(-63.869 -169.109)" /></g><g transform="translate(91.744 49.611)"><path d="M332.587,169.109a19.862,19.862,0,1,0,19.862,19.862A19.884,19.884,0,0,0,332.587,169.109Zm0,34.356a14.494,14.494,0,1,1,14.494-14.494A14.51,14.51,0,0,1,332.587,203.465Z" transform="translate(-312.725 -169.109)" /></g><g transform="translate(54.167 97.29)"><path d="M223.824,331.632h-36.5a2.684,2.684,0,0,0,0,5.369h36.5a2.684,2.684,0,1,0,0-5.369Z" transform="translate(-184.637 -331.632)" /></g><g transform="translate(64.144 107.489)"><path d="M237.879,366.4H221.33a2.684,2.684,0,1,0,0,5.369h16.548a2.684,2.684,0,1,0,0-5.369Z" transform="translate(-218.646 -366.398)" /></g><g transform="translate(32.722 63.596)"><circle cx="5.877" cy="5.877" r="5.877" /></g><g transform="translate(105.728 63.596)"><circle cx="5.877" cy="5.877" r="5.877" /></g></g></svg>
        </div>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Error fetching data </h1>
          <p>Try re-connecting to internet or check authenticity of page you've visited</p>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
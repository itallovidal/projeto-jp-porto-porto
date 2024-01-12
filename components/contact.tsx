
export default function Contact() {
  // @ts-ignore
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className=" mx-auto pb-12 md:pb-20">
            <h2 className="h2 mb-4">Contatos</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/*<circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />*/}
                {/*<path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />*/}
                {/*<path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />*/}

                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" className={'w-3 h-3'} />
                </svg>

              </svg>
              <h4 className="h4">22 9 9999-9999</h4>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <a href="https://www.google.com.br/maps/place/Av.+J%C3%BAlia+Kubitschek,+39+-+Parque+Riviera,+Cabo+Frio+-+RJ,+28905-000/@-22.8821239,-42.0304065,17z/data=!3m1!4b1!4m6!3m5!1s0x9704ccdb5f6f5b:0x53ccc008f0ec73aa!8m2!3d-22.8821289!4d-42.0278316!16s%2Fg%2F11hzpmq8qn?entry=ttu" target ="_blank">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                </svg>
              </a>
              <h4 className="h4">AV JULIA KUBSTICHECK 39</h4>
              <h4 className="h4 mb-2">Loja 02 - 28.922-150</h4>
              <p className="text-lg text-gray-400 text-center">Parque Riviera Cabo Frio - RJ</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
                </svg>

              </svg>
              <h4 className="h4 mb-2">contato@portoeporto.com.br</h4>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <svg  viewBox="0 0 74 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40.8036 0.297363C44.9659 0.308202 47.0785 0.329879 48.9025 0.380458L49.6203 0.405748C50.4491 0.43465 51.2667 0.470779 52.2546 0.514132C56.1912 0.694773 58.8772 1.30173 61.234 2.1941C63.6759 3.11175 65.733 4.35456 67.7901 6.35968C69.6714 8.16571 71.1271 10.3504 72.0559 12.7616C72.9698 15.063 73.5914 17.6859 73.7764 21.5335C73.8208 22.4945 73.8577 23.293 73.8874 24.1059L73.9096 24.8067C73.965 26.5843 73.9873 28.6472 73.9947 32.7116L73.9984 35.4068V40.1396C74.0074 42.7748 73.9791 45.41 73.9133 48.0444L73.8911 48.7453C73.8615 49.5582 73.8245 50.3566 73.7801 51.3176C73.5951 55.1653 72.9661 57.7846 72.0559 60.0896C71.1298 62.5021 69.6737 64.6873 67.7901 66.4915C65.94 68.328 63.7029 69.7494 61.234 70.6571C58.8772 71.5494 56.1912 72.1564 52.2546 72.337C51.3767 72.3774 50.4986 72.4135 49.6203 72.4454L48.9025 72.4671C47.0785 72.5177 44.9659 72.543 40.8036 72.5502L38.0436 72.5538H33.2005C30.5006 72.5629 27.8008 72.5352 25.1017 72.4707L24.3839 72.449C23.5056 72.4165 22.6275 72.3792 21.7496 72.337C17.813 72.1564 15.127 71.5494 12.7665 70.6571C10.2975 69.7516 8.06112 68.3299 6.21412 66.4915C4.33108 64.6861 2.87402 62.5013 1.94454 60.0896C1.03068 57.7882 0.409114 55.1653 0.224123 51.3176C0.182903 50.4604 0.145905 49.6029 0.113129 48.7453L0.0946304 48.0444C0.0264505 45.41 -0.00438459 42.7748 0.00213479 40.1396V32.7116C-0.00819125 30.0764 0.0189436 27.4412 0.0835309 24.8067L0.109429 24.1059C0.139028 23.293 0.176026 22.4945 0.220424 21.5335C0.405414 17.6859 1.02698 15.0666 1.94084 12.7616C2.86991 10.3479 4.32988 8.16256 6.21782 6.35968C8.06436 4.52246 10.2992 3.10087 12.7665 2.1941C15.127 1.30173 17.8093 0.694773 21.7496 0.514132C22.7338 0.470779 23.5551 0.43465 24.3839 0.405748L25.1017 0.384071C27.7995 0.319881 30.4982 0.29218 33.1968 0.300976L40.8036 0.297363ZM37.0002 18.3615C32.094 18.3615 27.3887 20.2647 23.9194 23.6523C20.4502 27.04 18.5012 31.6347 18.5012 36.4256C18.5012 41.2165 20.4502 45.8112 23.9194 49.1988C27.3887 52.5865 32.094 54.4897 37.0002 54.4897C41.9065 54.4897 46.6118 52.5865 50.081 49.1988C53.5503 45.8112 55.4993 41.2165 55.4993 36.4256C55.4993 31.6347 53.5503 27.04 50.081 23.6523C46.6118 20.2647 41.9065 18.3615 37.0002 18.3615ZM37.0002 25.5871C38.4578 25.5869 39.9012 25.867 41.2479 26.4115C42.5947 26.9559 43.8184 27.7541 44.8493 28.7604C45.8801 29.7666 46.6979 30.9613 47.2559 32.2762C47.8139 33.5911 48.1013 35.0005 48.1015 36.4238C48.1018 37.8471 47.8149 39.2565 47.2573 40.5716C46.6998 41.8867 45.8824 43.0816 44.8519 44.0883C43.8214 45.0949 42.5979 45.8934 41.2514 46.4383C39.9048 46.9832 38.4615 47.2638 37.0039 47.264C34.0602 47.264 31.237 46.1221 29.1555 44.0895C27.0739 42.0569 25.9045 39.3001 25.9045 36.4256C25.9045 33.551 27.0739 30.7942 29.1555 28.7616C31.237 26.729 34.0602 25.5871 37.0039 25.5871M56.4279 12.9422C55.2014 12.9422 54.0251 13.418 53.1577 14.265C52.2904 15.1119 51.8032 16.2605 51.8032 17.4583C51.8032 18.656 52.2904 19.8047 53.1577 20.6516C54.0251 21.4985 55.2014 21.9743 56.4279 21.9743C57.6545 21.9743 58.8308 21.4985 59.6982 20.6516C60.5655 19.8047 61.0527 18.656 61.0527 17.4583C61.0527 16.2605 60.5655 15.1119 59.6982 14.265C58.8308 13.418 57.6545 12.9422 56.4279 12.9422Z" fill="white"/>
                </svg>
              </svg>
              <h4 className="h4 mb-2">instagram.com/porto</h4>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <svg  viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75 36.9147C75 16.7019 58.2 0.297363 37.5 0.297363C16.8 0.297363 0 16.7019 0 36.9147C0 54.6374 12.9 69.3942 30 72.7996V47.8998H22.5V36.9147H30V27.7603C30 20.6932 35.8875 14.9443 43.125 14.9443H52.5V25.9295H45C42.9375 25.9295 41.25 27.5772 41.25 29.5912V36.9147H52.5V47.8998H41.25V73.3489C60.1875 71.518 75 55.919 75 36.9147Z" fill="white"/>
                </svg>
              </svg>
              <h4 className="h4 mb-2">fb.com/porto</h4>
              {/*<p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>*/}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

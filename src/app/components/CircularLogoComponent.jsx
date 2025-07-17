"use client";

export default function CircularLogoComponent() {
  return (
    <div className="flex items-center justify-center sm:p-6">
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .circular-text {
          animation: rotate 20s linear infinite;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #000000, #1e40af);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="container p-0 flex justify-start items-center w-full text-white">
        <div className="content-container flex flex-col justify-center items-center w-full sm:w-[80%]">
          <div className="row1 flex flex-col sm:flex-row w-full">
            <div className="clo1 flex justify-center sm:justify-end items-center pt-6 sm:pt-10 w-full text-4xl sm:text-5xl md:text-[5.5rem] font-bold">
              <h1>LET'T WORK</h1>
            </div>
            <div className="col2  w-full sm:w-auto h-[200px] sm:h-[300px]">
              <div className="max-w-6xl mx-auto    p-0 m-0">
                <div className="flex flex-col items-center justify-start">
                  {/* Logo Section */}
                  <div className="w-40 h-40 sm:w-60 sm:h-80 rounded-full flex items-center justify-center relative">
                    {/* Outer circle with rotating text */}
                    <div className="circular-text absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px]">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          id="textPath"
                          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                          stroke="none"
                        />
                        <text className="text-white text-[8px] sm:text-[10px]" fill="white">
                          <textPath href="#textPath" startOffset="%">
                            <tspan dy="-5">LET'S WORK TOGETHER • LET'S WORK TOGETHER •</tspan>
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    {/* Inner circle with arrow */}
                    <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-32 md:h-32 rounded-full gradient-bg flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 17L17 7M17 7H10M17 7V14"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row2 -mt-16 flex justify-center sm:justify-end items-start pl-0 sm:pl-20 flex-row w-full">
            <div className="clo1 relative -top-2 sm:-top-0 right-0 flex justify-center sm:justify-end pl-0 sm:pl-40 items-end w-full text-4xl sm:text-5xl md:text-[5.5rem] font-bold">
              <h1>TOGETHER</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
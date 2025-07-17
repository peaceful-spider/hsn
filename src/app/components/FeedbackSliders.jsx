'use client';

import React from 'react';

const FeedbackSliders = () => {
  const sliderQuantity = 5;

  return (
    <section className="w-[85%] max-w-[1200px] mx-auto flex flex-col items-center min-h-screen box-border ">
      <div className="w-full flex flex-col mb-[30px] text-white">
        <div className="text-center">
          <h1 className="text-[9rem] m-0 bg-gradient-to-r from-[#96bcd4] to-[#a77777] bg-clip-text text-transparent md:text-[8rem]">
            1,000+
          </h1>
          <h3 className="text-[1.3rem] mb-[5px] md:text-[0.7rem] md:font-normal">
            Join our expanding community who&apos;ve <br /> achieved success through our solution
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center gap-[10px]">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-[70px] h-[70px] rounded-full bg-cover bg-no-repeat md:w-[50px] md:h-[50px]"
              style={{ backgroundImage: 'url(https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg)' }}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1200px] flex flex-wrap md:gap-[8px]">
        {/* Slider 1 */}
        <div className="flex-1 min-w-[230px] max-w-[400px] overflow-hidden bg-black h-[80vh] md:h-[50vh] md:min-w-[120px] md:p-[30px] [mask-image:linear-gradient(to_bottom,transparent,#000_30%_70%,transparent)] [--quantity:5] lg:[--width:660px] lg:[--height:640px] lg:h-[85vh] md:[--width:300px] md:[--height:200px] md:h-[70vh] sm:[--width:180px] sm:[--height:180px]">
          <div
            className="flex flex-col h-[calc(var(--height)*var(--quantity)*2)] animate-[oppositeAutoRun_40s_linear_infinite] hover:animation-pause"
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex justify-center items-center p-[5px] box-border">
                <div className="w-[var(--width)] h-auto bg-gradient-to-b from-[#2f2f30] to-[rgb(15,15,15)] rounded-2xl backdrop-blur-[7.1px] p-[25px] flex flex-col justify-between box-border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_6px_18px_rgba(255,255,255,0.5)] hover:bg-gradient-to-b hover:from-[#203980] hover:to-black">
                  <h3 className="m-0 mb-[15px] text-[10px] font-bold text-white lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
                    John Doe
                  </h3>
                  <p className="m-0 text-[10px] text-[#858383] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.9rem]">
                    &quot;Exceptional service! Truly went above and beyond Exceptional service! Truly went above and beyondExceptional service! Truly went above and beyondExceptional service! Truly went above and beyond.&quot;
                  </p>
                  <hr />
                  <div className="flex flex-row justify-start items-center gap-[5px]">
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat"
                      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg)' }}
                    />
                    <div>
                      <h1 className="m-0 text-[1.3rem] text-white">Olivia Rodrigo</h1>
                      <h4 className="m-0 text-steelblue">Business Owner</h4>
                    </div>
                  </div>
                  <div className="text-[#ffd700] text-[1.4rem] mt-[12px] lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1.1rem]">
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider 2 */}
        <div className="flex-1 min-w-[230px] max-w-[400px] overflow-hidden bg-black h-[80vh] md:h-[50vh] md:min-w-[120px] md:p-[30px] [mask-image:linear-gradient(to_bottom,transparent,#000_30%_70%,transparent)] [--quantity:5] lg:[--width:660px] lg:[--height:640px] lg:h-[85vh] md:[--width:300px] md:[--height:200px] md:h-[70vh] sm:[--width:180px] sm:[--height:180px]">
          <div
            className="flex flex-col h-[calc(var(--height)*var(--quantity)*2)] animate-[autoRun_40s_linear_infinite] hover:animation-pause"
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex justify-center items-center p-[5px] box-border">
                <div className="w-[var(--width)] h-auto bg-gradient-to-b from-[#2f2f30] to-[rgb(15,15,15)] rounded-2xl backdrop-blur-[7.1px] p-[25px] flex flex-col justify-between box-border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_6px_18px_rgba(255,255,255,0.5)] hover:bg-gradient-to-b hover:from-[#203980] hover:to-black">
                  <h3 className="m-0 mb-[15px] text-[10px] font-bold text-white lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
                    John Doe
                  </h3>
                  <p className="m-0 text-[10px] text-[#858383] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.9rem]">
                    &quot;Exceptional service! Truly went above and beyond Exceptional service! Truly went above and beyondExceptional service! Truly went above and beyondExceptional service! Truly went above and beyond.&quot;
                  </p>
                  <hr />
                  <div className="flex flex-row justify-start items-center gap-[5px]">
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat"
                      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg)' }}
                    />
                    <div>
                      <h1 className="m-0 text-[1.3rem] text-white">Olivia Rodrigo</h1>
                      <h4 className="m-0 text-steelblue">Business Owner</h4>
                    </div>
                  </div>
                  <div className="text-[#ffd700] text-[1.4rem] mt-[12px] lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1.1rem]">
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider 3 */}
        <div className="flex-1 min-w-[230px] max-w-[400px] overflow-hidden bg-black h-[80vh] md:h-[50vh] md:min-w-[120px] md:p-[30px] [mask-image:linear-gradient(to_bottom,transparent,#000_30%_70%,transparent)] [--quantity:5] lg:[--width:660px] lg:[--height:640px] lg:h-[85vh] md:[--width:300px] md:[--height:200px] md:h-[70vh] sm:[--width:180px] sm:[--height:180px]">
          <div
            className="flex flex-col h-[calc(var(--height)*var(--quantity)*2)] animate-[oppositeAutoRun_40s_linear_infinite] hover:animation-pause"
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex justify-center items-center p-[5px] box-border">
                <div className="w-[var(--width)] h-auto bg-gradient-to-b from-[#2f2f30] to-[rgb(15,15,15)] rounded-2xl backdrop-blur-[7.1px] p-[25px] flex flex-col justify-between box-border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_6px_18px_rgba(255,255,255,0.5)] hover:bg-gradient-to-b hover:from-[#203980] hover:to-black">
                  <h3 className="m-0 mb-[15px] text-[10px] font-bold text-white lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
                    John Doe
                  </h3>
                  <p className="m-0 text-[10px] text-[#858383] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.9rem]">
                    &quot;Exceptional service! Truly went above and beyond Exceptional service! Truly went above and beyondExceptional service! Truly went above and beyondExceptional service! Truly went above and beyond.&quot;
                  </p>
                  <hr />
                  <div className="flex flex-row justify-start items-center gap-[5px]">
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat"
                      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg)' }}
                    />
                    <div>
                      <h1 className="m-0 text-[1.3rem] text-white">Olivia Rodrigo</h1>
                      <h4 className="m-0 text-steelblue">Business Owner</h4>
                    </div>
                  </div>
                  <div className="text-[#ffd700] text-[1.4rem] mt-[12px] lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1.1rem]">
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider 4 */}
        <div className="flex-1 min-w-[230px] max-w-[400px] overflow-hidden bg-black h-[80vh] md:h-[50vh] md:min-w-[120px] md:p-[30px] [mask-image:linear-gradient(to_bottom,transparent,#000_30%_70%,transparent)] [--quantity:5] lg:[--width:660px] lg:[--height:640px] lg:h-[85vh] md:[--width:300px] md:[--height:200px] md:h-[70vh] sm:[--width:180px] sm:[--height:180px]">
          <div
            className="flex flex-col h-[calc(var(--height)*var(--quantity)*2)] animate-[autoRun_40s_linear_infinite] hover:animation-pause"
          >
            {[...Array(10)].map((_, index) => (
              <div key={index} className="flex justify-center items-center p-[5px] box-border">
                <div className="w-[var(--width)] h-auto bg-gradient-to-b from-[#2f2f30] to-[rgb(15,15,15)] rounded-2xl backdrop-blur-[7.1px] p-[25px] flex flex-col justify-between box-border transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_6px_18px_rgba(255,255,255,0.5)] hover:bg-gradient-to-b hover:from-[#203980] hover:to-black">
                  <h3 className="m-0 mb-[15px] text-[10px] font-bold text-white lg:text-[1.3rem] md:text-[1.5rem] sm:text-[1.3rem]">
                    John Doe
                  </h3>
                  <p className="m-0 text-[10px] text-[#858383] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.9rem]">
                    &quot;Exceptional service! Truly went above and beyond Exceptional service! Truly went above and beyondExceptional service! Truly went above and beyondExceptional service! Truly went above and beyond.&quot;
                  </p>
                  <hr />
                  <div className="flex flex-row justify-start items-center gap-[5px]">
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat"
                      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg)' }}
                    />
                    <div>
                      <h1 className="m-0 text-[1.3rem] text-white">Olivia Rodrigo</h1>
                      <h4 className="m-0 text-steelblue">Business Owner</h4>
                    </div>
                  </div>
                  <div className="text-[#ffd700] text-[1.4rem] mt-[12px] lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1.1rem]">
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes autoRun {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(var(--height) * var(--quantity) * -1));
          }
        }
        @keyframes oppositeAutoRun {
          from {
            transform: translateY(calc(var(--height) * var(--quantity) * -1));
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FeedbackSliders; 
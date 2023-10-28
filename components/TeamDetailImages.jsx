import React from "react";

function TeamDetailImages({
  imageHome,
  imageAway,
  imageThird,
  imageFourth,
  imageSpecial1,
  imageSpecial2,
  imageSpecial3,
  colorHome,
  colorAway,
  colorThird,
  colorFourth,
  colorSpecial,
  colorSpecialTwo,
  colorHomeTwo,
  colorAwayTwo,
  colorThirdTwo,
  colorFourthTwo,
}) {
  return (
    <>
      <div className="grid lg:flex md:grid-cols-3 sm:grid-cols-2 gap-5 mt-4">
        <div className="flex flex-col text-center shadow-slate-400 shadow-2xl hover:scale-110 duration-500 rounded-b-md   ">
          <span
            className="rounded-t-md p-1 font-semibold"
            style={{ background: `${colorHome}`, color: `${colorHomeTwo}` }}
          >
            Home
          </span>
          <img
            src={imageHome}
            width={200}
            height={225}
            className="border-4 rounded-b-md "
            style={{ borderColor: `${colorHome}` }}
          />
        </div>
        <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md">
          <span
            className="rounded-t-md p-1 font-semibold"
            style={{ background: `${colorAway}`, color: `${colorAwayTwo}` }}
          >
            Away
          </span>
          <img
            src={imageAway}
            width={200}
            height={225}
            className="border-4 rounded-b-md "
            style={{ borderColor: `${colorAway}` }}
          />
        </div>
        {imageThird ? (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md ">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{ background: `${colorThird}`, color: `${colorThirdTwo}` }}
            >
              Third
            </span>
            <img
              src={imageThird}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorThird}` }}
            />
          </div>
        ) : null}
        {/* //! CAMISA 4 */}
        {imageFourth ? (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md ">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{
                background: `${colorFourth}`,
                color: `${colorFourthTwo}`,
              }}
            >
              Fourth
            </span>
            <img
              src={imageFourth}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorFourth}` }}
            />
          </div>
        ) : null}

        {imageSpecial1 ? (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md ">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{
                background: `${colorSpecial}`,
                color: `${colorSpecialTwo}`,
              }}
            >
              {imageSpecial1.name}
            </span>
            <img
              src={imageSpecial1.image}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorSpecial}` }}
            />
          </div>
        ) : null}
        {imageSpecial2 ? (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md ">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{
                background: `${colorSpecial}`,
                color: `${colorSpecialTwo}`,
              }}
            >
              {imageSpecial2.name}
            </span>
            <img
              src={imageSpecial2.image}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorSpecial}` }}
            />
          </div>
        ) : null}
        {imageSpecial3 ? (
          <div className="flex flex-col text-center shadow-slate-300 shadow-md hover:scale-110 duration-500 rounded-md ">
            <span
              className="rounded-t-md p-1 font-semibold"
              style={{
                background: `${colorSpecial}`,
                color: `${colorSpecialTwo}`,
              }}
            >
              {imageSpecial3.name}
            </span>
            <img
              src={imageSpecial3.image}
              width={200}
              height={225}
              className="border-4 rounded-b-md"
              style={{ borderColor: `${colorSpecial}` }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default TeamDetailImages;
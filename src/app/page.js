import Image from "next/image";
import Play from "/public/Play.svg";
import manimg from "/public/manimgbaner.png";
import debetecard from "/public/debitcard.png";
import cardimgone from "/public/onecard.png";
import cardimgtwo from "/public/twocard.png";
import cardimgthree from "/public/threecard.png";
import laptop from "/public/laptop.png";
import secondprofile from "/public/secondprofile.jpg";
import Image1 from "/public/1.jpg";
import Image2 from "/public/2.jpg";
import Image3 from "/public/3.jpg";
import Image4 from "/public/4.jpg";
import Image5 from "/public/5.png";

export default function Home() {
  return (
    <div>
      {/* Navbar Start  */}
      <div>
        <div className="navbar bg-base-100 bg-gradient-to-r from-[#d7fcef] via-white to-[#d7fcef]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="font-bold">
                  <a>Home</a>
                </li>
                <li className="text-slate-500">
                  <a>Product</a>
                </li>
                <li className="text-slate-500">
                  <a>FAQ</a>
                </li>
                <li className="text-slate-500">
                  <a>Blog</a>
                </li>
                <li className="text-slate-500">
                  <a>About Us</a>
                </li>
                <li>
                  <a className="text-slate-500  pe-3">Login</a>
                </li>
                <li>
                  <a className="bg-[#54BD95]  px-3 py-1 rounded-md text-white">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
            <a className="font-bold text-[#54BD95] text-4xl ps-52 lg:ps-32">Biccas</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="font-bold">
                <a>Home</a>
              </li>
              <li className="text-slate-500">
                <a>Product</a>
              </li>
              <li className="text-slate-500">
                <a>FAQ</a>
              </li>
              <li className="text-slate-500">
                <a>Blog</a>
              </li>
              <li className="text-slate-500">
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end pe-32 ">
            <a className="text-slate-500 hidden lg:block pe-3">Login</a>
            <a className="bg-[#54BD95] hidden lg:block px-3 py-1 rounded-md text-white">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      {/* Navbar end  */}

      {/* Desplay 1st Sart  */}
      <div>
        <div className=" h-screen  bg-gradient-to-r from-[#d7fcef] via-white to-[#d7fcef]">
          <div className="justify-evenly mx-auto lg:flex flex-row  ">
            <div className="text-center lg:pt-20 pt-0 lg:text-left">
              <h1 className="lg:text-6xl text-base lg:pt-10 pt-3 pb-3 font-bold">
                We Are here to <br /> Increase your <br /> Productivity
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="387"
                height="34"
                viewBox="0 0 487 34"
                fill="none"
                className="lg:block hidden"
              >
                <path
                  d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"
                  stroke="#54BD95"
                  stroke-width="8"
                  stroke-linecap="round"
                />
              </svg>
              <p className="lg:py-6 py-3 lg:text-base text-xs">
                Let is make your work more organize and easily using <br /> the
                Taskio Dashboard with many of the latest <br /> featuresin
                managing work every day.
              </p>
              <div className="lg:flex flex lg:justify-start justify-center ">
                <button className="bg-[#54BD95] px-3 py-2 rounded-full text-white">
                  Try free trial
                </button>
                <div></div>
                <button className="px-3 py-2 flex">
                  <div>
                    <Image alt="play" className="w-6" src={Play}></Image>
                  </div>{" "}
                  <div className="ps-2">View Demo</div>
                </button>
              </div>
            </div>
            <div className="relative ">
              <Image
                className="lg:w-[437px] w-[150px] z-10 ms-20 pt-16 rounded-xl bannermanbg"
                src={manimg}
                alt="manimg"
              ></Image>
              <div className="-mt-[300px]  ms-4">
                <div className="w-[40px] h-[40px] pt-[14px] ps-[14px] transform fiftydgreetik  flex-shrink-0 rounded-2xl bg-purple-700">
                  {" "}
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path
                      d="M1 4.73309L5.17391 8.99976L13 0.999756"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="lg:-mt-[200px] -mt-[170px] ms-10 lg:-ms-28">
                  <div className=" w-[262px] rounded-lg h-[78px] ps-6 pt-4 bg-white shadow-xl">
                    <div className="  flex">
                      <div>
                        <h2 className="title text-slate-500">Enter amount</h2>
                        <p className="font-bold">$450..00</p>
                      </div>

                      <div className=" ">
                        <button className="bg-[#54BD95] px-3 ms-16 py-1 mt-2  rounded-full text-white">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-[270px] absolute  -ms-8">
                  <div className=" w-[198px] rounded-lg h-[70px] ps-10 lg:ps-6 pt-4 bg-white shadow-xl">
                    <div className="  flex">
                      <div>
                        <h2 className="title text-slate-500">Total Income</h2>
                        <p className="font-bold">$245.00</p>
                      </div>

                      <div className=" ">
                        <button className=" px-3  py-1 mt-2  rounded-full text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M15 16.6663V8.33301"
                              stroke="#52BD94"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 16.6663V3.33301"
                              stroke="#52BD94"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5 16.6665V11.6665"
                              stroke="#52BD94"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="btnsecond absolute mt-10 ms-[290px] lg:ms-[470px]">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_0_39)">
                      <path
                        d="M13.8627 9.78005C17.8637 10.8521 21.3968 10.64 21.7542 9.30638C22.1115 7.97271 19.1578 6.02248 15.1568 4.95042C11.1558 3.87836 7.62266 4.09043 7.26531 5.42409C6.90795 6.75776 9.86171 8.70799 13.8627 9.78005Z"
                        stroke="#F8F8FA"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.244 14.9411C19.8859 16.2773 16.3772 16.4932 12.3525 15.4148C8.32777 14.3364 5.39703 12.395 5.75507 11.0588"
                        stroke="#F8F8FA"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.26483 5.42432L4.24528 16.6935C3.88724 18.0296 6.81798 19.971 10.8427 21.0494C14.8674 22.1278 18.3761 21.9119 18.7342 20.5757L21.7537 9.3066"
                        stroke="#F8F8FA"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_39">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(5.92889 0.752441) rotate(15)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="">
                <div className="btnthard absolute mt-[350px] ms-[200px] lg:ms-[430px]">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_0_33)">
                      <path
                        d="M19.0921 16.8506C18.9777 17.2776 18.6984 17.6416 18.3156 17.8626C17.9328 18.0836 17.4778 18.1435 17.0509 18.0291L7.3916 15.4409L3.30912 17.798L6.76004 4.91896C6.87445 4.49199 7.15378 4.12796 7.53658 3.90695C7.91939 3.68593 8.37432 3.62604 8.80128 3.74045L20.0704 6.76C20.4974 6.87441 20.8614 7.15374 21.0824 7.53655C21.3034 7.91935 21.3633 8.37428 21.2489 8.80124L19.0921 16.8506Z"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_33">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(5.42361 0.247314) rotate(15)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="">
                <div className="h-[188px] w-[146px] absolute mt-[200px] ms-[260px] lg:ms-[430px]">
                  {" "}
                  <Image src={debetecard} alt="debetcard"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desplay 1st End  */}

      {/* More than 25,000 teams use Collabs start */}
      <div>
        <div className="bg-gradient-to-r -pt-28 lg:pt-20 from-[#d7fcef] via-white to-[#d7fcef]">
          <div className=" font-bold text-center text-4xl">
            More than 25,000 teams use Collabs
          </div>
          <div className="lg:flex flex-row ms-10 py-5  lg:py-16 gap-5 text-3xl text-slate-400 font-extrabold justify-center">
            <div className="flex gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="32"
                  viewBox="0 0 34 32"
                  fill="none"
                >
                  <rect x="11" width="12" height="9" fill="#A6A6A6" />
                  <rect y="23" width="34" height="9" fill="#A6A6A6" />
                  <rect x="24" y="14" width="10" height="18" fill="#A6A6A6" />
                  <rect y="14" width="10" height="18" fill="#A6A6A6" />
                </svg>
              </div>
              <div>Unsplash</div>
            </div>
            <div className="flex gap-3">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="7"
                  viewBox="0 0 38 7"
                  fill="none"
                >
                  <path
                    d="M2.66145 1L8.37574 6H35.3386L29.6243 1H2.66145Z"
                    stroke="#A6A6A6"
                    stroke-width="2"
                  />
                </svg>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="35"
                  viewBox="0 0 8 35"
                  fill="none"
                >
                  <path d="M8 7L0 0V28L8 35V7Z" fill="#A6A6A6" />
                </svg>
              </div>
              <div>Notion</div>
            </div>
            <div className="flex gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <rect width="30" height="30" rx="3" fill="#A6A6A6" />
                  <rect x="4" y="7" width="2" height="12" fill="white" />
                  <rect x="9" y="4" width="2" height="18" fill="white" />
                  <rect x="14" y="4" width="2" height="18" fill="white" />
                  <rect x="19" y="4" width="2" height="18" fill="white" />
                  <path
                    d="M5 24C7.83333 26.2639 16 29.4333 26 24"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <rect x="24" y="7" width="2" height="12" fill="white" />
                </svg>{" "}
              </div>
              <div>INTERCOM</div>
            </div>
            <div className="flex gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="30"
                  viewBox="0 0 23 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0711 1.41723C18.9464 2.32466 20 3.5554 20 4.83871H10L0 4.83871C0 3.5554 1.05357 2.32466 2.92893 1.41722C4.8043 0.509791 7.34784 0 10 0C12.6522 0 15.1957 0.509791 17.0711 1.41723ZM2.92893 28.5828C1.05357 27.6753 0 26.4446 0 25.1613H10L20 25.1613C20 26.4446 18.9464 27.6753 17.0711 28.5828C15.1957 29.4902 12.6522 30 10 30C7.34783 30 4.8043 29.4902 2.92893 28.5828ZM23 17.4194V21.2903H17V17.4194H23ZM6 8.70968H0V12.5806H6V8.70968ZM11 8.70968H23V12.5806H11V8.70968ZM12 17.4194H0V21.2903H12V17.4194Z"
                    fill="#A6A6A6"
                  />
                </svg>{" "}
              </div>
              <div>descript</div>
            </div>
            <div className="flex gap-3">
              <div className="bg-slate-400 w-8 h-8 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                >
                  <path
                    d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C9.95869 1 11.7295 1.80447 13 3.10102"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M11 10L15 8L17.5 11.5"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div>grammarly</div>
            </div>
          </div>
        </div>
      </div>
      {/* More than 25,000 teams use Collabs end  */}

      {/* How we support our pratner all over the world Start */}
      <div>
        <div className="lg:flex flex-row bg-[#F9F8FE] pb-16 pt-16 px-10 lg:px-40">
          <div className="w-7/12">
            <div className="font-bold text-base lg:text-5xl">
              How we support our <br /> pratner all over the world
            </div>
            <p className="py-10">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className="flex gap-10">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="142"
                    height="26"
                    viewBox="0 0 142 26"
                    fill="none"
                  >
                    <path
                      d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z"
                      fill="#FFC728"
                    />
                  </svg>
                </div>
                <div className="py-3">4.9 / 5 rating</div>
                <div>databricks</div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="142"
                    height="26"
                    viewBox="0 0 142 26"
                    fill="none"
                  >
                    <path
                      d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z"
                      fill="#FFC728"
                    />
                    <path
                      d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z"
                      fill="#FFC728"
                    />
                  </svg>
                </div>
                <div className="py-3">4.9 / 5 rating</div>
                <div>databricks</div>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full ">
            <div className="mb-12">
              <div className="lg:flex  gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M27.5 15H22.5L18.75 26.25L11.25 3.75L7.5 15H2.5"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-bold text-2xl">Publishing</div>
              </div>
              <div className="ps-12 pt-3">
                Plan, collaborate, and publishing your contetn that drivees
                meaningful engagement and growth for your barnd
              </div>
            </div>
            <div className="mb-12">
              <div className="flex gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M26.512 19.8626C25.7168 21.7432 24.473 23.4004 22.8894 24.6892C21.3057 25.9781 19.4305 26.8594 17.4276 27.2561C15.4247 27.6528 13.3551 27.5528 11.3997 26.9648C9.44436 26.3769 7.66281 25.3189 6.2108 23.8834C4.75879 22.4479 3.68055 20.6785 3.07032 18.73C2.4601 16.7815 2.33648 14.7132 2.71027 12.7059C3.08407 10.6986 3.9439 8.81338 5.21458 7.21513C6.48527 5.61689 8.12813 4.35424 9.99953 3.5376"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5V15H27.5Z"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-bold text-2xl">Analytics</div>
              </div>
              <div className="ps-12 pt-3">
                Analyze your performance and create goegeous report
              </div>
            </div>
            <div className="mb-12">
              <div className="flex gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M22.5 3.75C21.5054 3.75 20.5516 4.14509 19.8483 4.84835C19.1451 5.55161 18.75 6.50544 18.75 7.5V22.5C18.75 23.4946 19.1451 24.4484 19.8483 25.1517C20.5516 25.8549 21.5054 26.25 22.5 26.25C23.4946 26.25 24.4484 25.8549 25.1517 25.1517C25.8549 24.4484 26.25 23.4946 26.25 22.5C26.25 21.5054 25.8549 20.5516 25.1517 19.8483C24.4484 19.1451 23.4946 18.75 22.5 18.75H7.5C6.50544 18.75 5.55161 19.1451 4.84835 19.8483C4.14509 20.5516 3.75 21.5054 3.75 22.5C3.75 23.4946 4.14509 24.4484 4.84835 25.1517C5.55161 25.8549 6.50544 26.25 7.5 26.25C8.49456 26.25 9.44839 25.8549 10.1517 25.1517C10.8549 24.4484 11.25 23.4946 11.25 22.5V7.5C11.25 6.50544 10.8549 5.55161 10.1517 4.84835C9.44839 4.14509 8.49456 3.75 7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5C3.75 8.49456 4.14509 9.44839 4.84835 10.1517C5.55161 10.8549 6.50544 11.25 7.5 11.25H22.5C23.4946 11.25 24.4484 10.8549 25.1517 10.1517C25.8549 9.44839 26.25 8.49456 26.25 7.5C26.25 6.50544 25.8549 5.55161 25.1517 4.84835C24.4484 4.14509 23.4946 3.75 22.5 3.75Z"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-bold text-2xl">Engagement</div>
              </div>
              <div className="ps-12 pt-3">
                Quiuckly navigate you anda engage with your adience
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How we support our pratner all over the world End */}

      {/* Our Features you cab get start */}
      <div className="lg:flex flex-row justify-between py-20 bg-[#FFF] lg:px-32 px-5 ">
        <div className="font-bold text-3xl lg:text-6xl">
          Our Features <br /> you cab get
        </div>
        <div className="text-xl pt-2">
          We offer a variety of interesting features that you can <br /> help
          increase yor productivity at work and manage <br /> your projrct esaly
        </div>
        <div>
          <button className="bg-[#54BD95] px-5 mt-5 py-3 rounded-full text-white">
            Get Started
          </button>
        </div>
      </div>
      {/* Our Features you cab get end */}
      {/* Three Card start  */}
      <div>
        <div className="lg:flex flex-row py-20 gap-5 px-5 lg:px-[130px]">
          <div className=" w-full lg:w-1/3  bg-base-100 shadow-xl">
            <figure className="">
              <Image
                src={cardimgone}
                alt="Shoes"
                className="rounded-xl "
                width={364}
                height={430}
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">Collboration Teams </h2>
              <p>Here you can handle projects together with team virtually</p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/3  bg-base-100 shadow-xl">
            <figure className="">
              <Image
                src={cardimgtwo}
                alt="Shoes"
                className="rounded-xl "
                width={364}
                height={430}
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">Cloud Storage</h2>
              <p>
                No nedd to worry about storage because we provide storage up to
                2 TB
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
          <div className=" w-full lg:w-1/3  bg-base-100 shadow-xl">
            <figure className="">
              <Image
                src={cardimgthree}
                alt="Shoes"
                className="rounded-xl "
                width={364}
                height={430}
              />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">Daily Analytics</h2>
              <p>
                We always provide useful informatin to make it easier for you
                every day
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      {/* Three Card end  */}
      {/* What Benifit Will You Get start */}

      <div className="">
        <div className=" h-screen  bg-gradient-to-r from-[#ffffff] via-white to-[#d7fcef]">
          <div className="justify-evenly mx-auto flex-row lg:flex">
            <div className="text-center pt-20 lg:text-left">
              <h1 className="lg:text-6xl text-3xl  pt-10 pb-3 font-bold">
                What Benifit Will <br /> You Get
              </h1>

              <div className="font-semibold px-5">
                <div className="mt-7  flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>
                  </div>{" "}
                  <div className="mt-1">
                    Free Consulting With Experet Saving Money
                  </div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">Online Banking</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1"> Investment Report Every Month</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1s">Saving Money For The Future</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">Online Transection</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                className="lg:w-[450px] w-[300px] h-[350px] lg:h-[529px] z-10 ms-20 pt-16 rounded-xl "
                src={laptop}
                alt="laptop"
              ></Image>
              <div className="-mt-[300px] lg:block hidden ms-4"></div>
              <div>
                <div className="-mt-[200px] absolute lg:block hidden -ms-28">
                  <div className=" w-[304px] rounded-lg py-2 ps-6  bg-white shadow-xl">
                    <div className=" gap-3 flex">
                      <div>
                        <Image
                          src={secondprofile}
                          className="rounded-full h-[58px] w-[58px]"
                          alt="2ndprofile"
                        ></Image>
                      </div>
                      <div>
                        <h2 className="title font-bold text-black">
                          Amanda Young
                        </h2>
                        <p className="text-xs">Expert Saving Money</p>
                      </div>

                      <div className=" ">
                        <button className="bg-[#54BD95] px-2  py-2 mt-2  rounded-full text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.441 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z"
                              stroke="white"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-[270px] absolute lg:block hidden -ms-8">
                  <div className=" w-[300px]  rounded-lg h-[70px] ps-6 pt-6 bg-white shadow-xl">
                    <div className=" gap-4  flex">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.83333 11C2.83333 5.9374 6.93739 1.83334 12 1.83334C17.0626 1.83334 21.1667 5.9374 21.1667 11C21.1667 16.0626 17.0626 20.1667 12 20.1667C6.93739 20.1667 2.83333 16.0626 2.83333 11ZM12 0.166672C6.01692 0.166672 1.16667 5.01692 1.16667 11C1.16667 16.9831 6.01692 21.8333 12 21.8333C17.9831 21.8333 22.8333 16.9831 22.8333 11C22.8333 5.01692 17.9831 0.166672 12 0.166672ZM11.9301 14.6944L17.7196 8.69437L16.2804 7.30564L11.1148 12.6591L7.61369 9.93773L6.38631 11.5168L10.5968 14.7896L11.3062 15.341L11.9301 14.6944Z"
                            fill="#2B9B5B"
                          />
                        </svg>
                      </div>

                      <div className="font-bold ">
                        <div>Money Transfer Succesfull</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="secondbannerimg lg:block hidden absolute mt-10 lg:ms-[5px] ">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_0_173)">
                      <path
                        d="M16.1876 3.74049L4.91847 6.76004C4.02936 6.99828 3.50172 7.91217 3.73996 8.80128L6.75951 20.0704C6.99775 20.9595 7.91165 21.4872 8.80076 21.2489L20.0699 18.2294C20.959 17.9911 21.4866 17.0772 21.2484 16.1881L18.2288 4.919C17.9906 4.02989 17.0767 3.50225 16.1876 3.74049Z"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.24587 11.6397C9.91271 11.461 10.3084 10.7756 10.1298 10.1087C9.95108 9.4419 9.26566 9.04617 8.59883 9.22485C7.93199 9.40352 7.53626 10.0889 7.71494 10.7558C7.89362 11.4226 8.57904 11.8183 9.24587 11.6397Z"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20.386 12.9683L15.2829 10.0221L8.8011 21.2489"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_173">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.24707 5.42358) rotate(-15)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div>
                <div className="mt-[-90px] lg:block hidden absolute ms-[420px]">
                  <div className=" w-[198px]  rounded-lg h-[70px] ps-6 pt-4 bg-white shadow-xl">
                    <div className="  flex">
                      <div>
                        <h2 className="title text-slate-500">Total Income</h2>
                        <p className="font-bold">$245.00</p>
                      </div>

                      <div className=" ">
                        <button className=" px-3  py-1 mt-2  rounded-full text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M15 16.6663V8.33301"
                              stroke="#52BD94"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 16.6663V3.33301"
                              stroke="#52BD94"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5 16.6665V11.6665"
                              stroke="#52BD94"
                              stroke-width="1.66667"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What Benifit Will You Get end */}

      {/* Choose PlanThat’s Right For You start */}
      <div className="text-center pb-20 bg-base-100 bg-gradient-to-r from-[#ffffff] via-white to-[#d7fcef] ">
        <div className="font-bold sm:pt-10 text-4xl">
          Choose Plan <br />
          That is Right For You
        </div>
        <p className="text-slate-500 font-bold my-7">
          Choose plan that works best for you, feel free to contact us
        </p>
        <div className="bg-white mx-auto shadow-md rounded-xl w-[340px] p-2 ">
          <button className="pe-4">Bil Monthly</button>
          <button className="btn text-white bg-[#54BD95]">Bil Yearly</button>
        </div>
      </div>

      {/* Choose PlanThat’s Right For You end */}

      {/* packege Start */}
      <div className="lg:px-32  px-5 mb-8 bg-gradient-to-r from-[#ffffff] via-white to-[#d7fcef] py-8 lg:flex flex-row gap-5">
        <div className="card mt-5 hover:bg-[#54BD95] hover:text-white w-full lg:w-1/3 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10"></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Free</h2>
            <p>
              Have a go and test your <br /> superpowers
            </p>
            <div>
              $<span className="text-6xl font-bold">0</span>
            </div>
            <div className=" bg-slate-100 p-3 rounded-xl">
              <div className="font-semibold text-black">
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>
                  </div>{" "}
                  <div className="mt-1">2 Users</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">2 Files</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1"> Public Share & Comments</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1s">Chat Support </div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">New income apps</div>
                </div>
                <button className="px-5 my-5 py-3 shadow-lg hover:bg-[#54BD95] hover:text-white text-[#54BD95] font-semibold rounded-xl">
                  Signup for free
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-5 hover:bg-[#54BD95] hover:text-white w-full lg:w-1/3 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10"></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pro</h2>
            <p>
              Experiment the power
              <br /> of infinite possibilities
            </p>
            <div>
              $<span className="text-6xl font-bold">8</span>
            </div>
            <div className=" bg-slate-100 p-3 rounded-xl">
              <div className="font-semibold text-black">
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>
                  </div>{" "}
                  <div className="mt-1">4 Users</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">All apps</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">Unlimited editable exports</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1s">Folders and collaboration </div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">All incoming apps</div>
                </div>
                <button className="px-5 my-5 py-3 shadow-lg hover:bg-[#54BD95] hover:text-white text-[#54BD95] font-semibold rounded-xl">
                  Go to pro
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-5 hover:bg-[#54BD95] hover:text-white w-full lg:w-1/3 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10"></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Business</h2>
            <p>
              Unveil new superpowers and <br />
              join the Design Leaque{" "}
            </p>
            <div>
              $<span className="text-6xl font-bold">16</span>
            </div>
            <div className=" bg-slate-100 p-3 rounded-xl">
              <div className="font-semibold text-black">
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>
                  </div>{" "}
                  <div className="mt-1">All the features of pro plan</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">Account success Manager</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">Single Sign-On (SSO)</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1s">Co-conception pogram</div>
                </div>
                <div className="mt-7 flex gap-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                      />
                    </svg>{" "}
                  </div>
                  <div className="mt-1">Collaboration-Soon</div>
                </div>
                <button className="px-5 my-5 py-3 shadow-lg hover:bg-[#54BD95] hover:text-white text-[#54BD95] font-semibold rounded-xl">
                  Goto Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* packege end */}

      {/* Footer start  */}
      <div className="bg-[#161C28] px-4 lg:px-[130px] pt-20 text-white min-h-full">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
            <div className="px-10">
              <h1 className="text-white text-4xl md:text-3xl lg:text-5xl">
                People are Saying <br /> About DoWhith
              </h1>

              <p className="textp mt-8 lg:w-9/12">
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>

              <svg
                className="mt-8"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="38"
                viewBox="0 0 45 38"
                fill="none"
              >
                <path d="M11.5 0H21.5L14.5 38H0L11.5 0Z" fill="#D9D9D9" />
                <path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9" />
              </svg>

              <p className="textp mt-8 lg:w-10/12">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <p className="textp mt-8">_ Aria Zinanrio</p>

              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 items-center justify-items-center lg:justify-items-start gap-6 mt-8">
                <Image
                  src={Image1}
                  alt="Image"
                  className="w-20 h-20 rounded-full"
                />
                <Image
                  src={Image2}
                  alt="Image"
                  className="w-20 h-20 rounded-full"
                />
                <Image
                  src={Image3}
                  alt="Image"
                  className="w-20 h-20 rounded-full"
                />
                <Image
                  src={Image4}
                  alt="Image"
                  className="w-20 h-20 rounded-full"
                />
                <Image
                  src={Image5}
                  alt="Image"
                  className="w-20 h-20 rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="bg-[#222938] py-10 rounded-xl">
                <svg
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="73"
                  height="86"
                  viewBox="0 0 73 86"
                  fill="none"
                >
                  <path
                    d="M72.0585 20.8486V20.4268H72.0234C71.8125 15.2245 68.2974 10.0574 61.4255 6.103C47.3302 -2.03433 24.4824 -2.03433 10.4749 6.103C3.46239 10.1805 -0.017509 15.5233 6.62377e-05 20.8662V31.8859V32.0792V42.9055V43.0989V53.9252V54.1185V65.1382C0.0352167 70.4811 3.58541 75.8239 10.6331 79.8838C17.6983 83.9613 26.9253 86 36.1347 86C45.3617 86 54.5536 83.9613 61.5837 79.8838C68.5962 75.8064 72.0761 70.4635 72.0585 65.1382V54.1185V53.5034V43.0989V42.4486V32.044V31.4289V20.8486C72.0585 20.8662 72.0585 20.8486 72.0585 20.8486ZM17.8038 14.2403L19.7546 13.1155C20.2467 12.8343 21.02 12.8343 21.5297 13.1155L23.9375 14.504C24.4648 14.1876 25.0096 13.8888 25.5369 13.5725L23.1291 12.184C22.637 11.9028 22.637 11.4459 23.1291 11.1647L25.0799 10.0399C25.572 9.75865 26.3629 9.75865 26.855 10.0399L29.9307 11.8149L30.3349 11.6919C33.7797 10.6374 37.4353 10.1629 41.337 10.4441C44.3951 10.6726 47.1368 11.3931 49.6501 12.4477C50.6343 12.8519 51.5482 13.3088 52.3743 13.7834C54.5536 15.0488 56.2232 16.5251 57.5238 18.1948L57.7874 18.6517C58.0862 19.2668 57.7347 19.6887 56.6978 19.9347C55.6081 20.2159 54.5009 20.462 53.3936 20.708C52.6203 20.8662 52.0755 20.831 51.6009 20.5498C51.4779 20.4795 51.3725 20.3917 51.2494 20.3038C50.5113 19.6184 49.8434 18.8802 49.0525 18.2123C48.3495 17.5972 47.5762 17.0172 46.6975 16.5075C45.5375 15.8397 44.2018 15.2773 42.6024 14.8906C40.2122 14.2931 37.8747 14.4337 35.5196 14.9785L35.4317 14.9961L41.3897 18.4408C41.8818 18.722 41.8818 19.179 41.3897 19.4602L39.4389 20.585C38.9468 20.8662 38.1559 20.8662 37.6638 20.585L30.827 16.6481C30.3173 16.9469 29.7725 17.2633 29.2277 17.5796L36.0644 21.5165C36.5565 21.7977 36.5565 22.2546 36.0644 22.5358L34.1136 23.6607C33.6215 23.9419 32.8482 23.9419 32.3385 23.6607L26.0993 20.0577C24.7108 21.745 24.2715 23.4146 25.8357 25.1546C26.5035 25.8927 27.3647 26.543 28.3665 27.123C29.2453 27.6327 30.2119 28.072 31.2488 28.4763C32.4088 28.8981 33.6391 29.2847 34.8342 29.7241C35.0275 29.7944 35.1857 29.8647 35.3263 29.9526C35.8008 30.2338 35.8711 30.5501 35.5899 30.9895C35.1857 31.6574 34.7287 32.3077 34.2366 32.9404C33.8324 33.5204 33.0767 33.7313 31.987 33.5204C30.8973 33.2743 29.8252 32.9755 28.7707 32.6416C26.8374 32.0089 25.0975 31.2707 23.586 30.392C22.0043 29.4781 20.6685 28.4235 19.5964 27.2284C17.0832 24.3812 17.1359 21.4813 19.1922 18.5638C19.5964 17.9839 20.1589 17.4742 20.651 16.9293L17.7335 15.2421C17.3117 14.9785 17.3117 14.5215 17.8038 14.2403ZM10.6331 35.6118C24.746 43.7667 47.5586 43.7667 61.5837 35.6118C63.763 34.3464 65.5732 32.9404 67.0671 31.4641V32.0792C67.0847 35.7348 64.1672 39.5487 59.0704 42.5013C53.0245 46.0163 44.8872 47.9496 36.1347 47.9496C27.3823 47.9496 19.1922 46.0163 13.1112 42.5013C7.96165 39.5311 4.99143 35.6997 4.95628 32.0616V31.341C6.52048 32.8525 8.38345 34.3112 10.6331 35.6118ZM59.088 64.5231C53.0421 68.0381 44.9048 69.9714 36.1523 69.9714C27.3999 69.9714 19.2098 68.0381 13.1288 64.5231C7.97922 61.5529 5.00901 57.7215 4.97386 54.0834V53.5561C6.52048 55.0852 8.36588 56.5263 10.6331 57.8269C17.6983 61.9044 26.9253 63.9431 36.1347 63.9431C45.3617 63.9431 54.5536 61.9044 61.5837 57.8269C63.763 56.5615 65.5732 55.1555 67.0671 53.6791V54.1185C67.1023 57.7742 64.1848 61.5704 59.088 64.5231ZM59.088 53.521C53.0421 57.036 44.9048 58.9693 36.1523 58.9693C27.3999 58.9693 19.2098 57.036 13.1288 53.521C7.97922 50.5508 5.00901 46.7194 4.97386 43.0813V42.554C6.52048 44.0831 8.36588 45.5242 10.6331 46.8248C17.6983 50.9023 26.9253 52.941 36.1347 52.941C45.3617 52.941 54.5536 50.9023 61.5837 46.8248C63.763 45.5594 65.5732 44.1534 67.0671 42.6771V43.1164C67.1023 46.7545 64.1848 50.5508 59.088 53.521ZM59.088 75.5427C53.0421 79.0578 44.9048 80.9911 36.1523 80.9911C27.3999 80.9911 19.2098 79.0578 13.1288 75.5427C7.97922 72.5725 5.00901 68.7411 4.97386 65.1031V64.5758C6.52048 66.1048 8.36588 67.546 10.6331 68.8466C17.6983 72.924 26.9253 74.9628 36.1347 74.9628C45.3617 74.9628 54.5536 72.924 61.5837 68.8466C63.763 67.5812 65.5732 66.1751 67.0671 64.6988V65.1382C67.1023 68.7763 64.1848 72.5901 59.088 75.5427Z"
                    fill="#54BD95"
                  />
                </svg>
                <h1 className="text-white text-center text-xl mt-3">
                  Get Started
                </h1>

                <div className="w-80 mx-auto mt-8">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered w-80"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Message</span>
                    </label>
                    <textarea
                      placeholder="What are you say ?"
                      className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                    ></textarea>
                    <button className="bg w-80 mt-4 py-2 text-white rounded-lg">
                      Request Demo
                    </button>
                    <p className="textp text-right mt-2 text-sm">
                      or Start Free Trial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <footer className="text-center footer p-10 text-white">
              <form>
                <header className="text-3xl text-[#54BD95] font-semibold text1">
                  Biccas
                </header>
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="text-base-100 textp py-3">
                      Get started noew try our product
                    </span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="Enter your email here"
                      className="input input-bordered join-item border-base-100 rounded-full bg3"
                    />
                    <button className="bg-[#54BD95]  py-2 px-2 rounded-full join-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12H19"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 5L19 12L12 19"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </fieldset>
              </form>
              <nav>
                <header className="footer-title">Support</header>
                <a className="link link-hover textp">Help centre</a>
                <a className="link link-hover textp">Account information</a>
                <a className="link link-hover textp">About</a>
                <a className="link link-hover textp">Contact us</a>
              </nav>
              <nav>
                <header className="footer-title">Help and Solution</header>
                <a className="link link-hover textp">Talk to support</a>
                <a className="link link-hover textp">Support docs</a>
                <a className="link link-hover textp">System status</a>
                <a className="link link-hover textp">Covid responde</a>
              </nav>
              <nav>
                <header className="footer-title">Product</header>
                <a className="link link-hover textp">Update</a>
                <a className="link link-hover textp">Security</a>
                <a className="link link-hover textp">Beta test</a>
                <a className="link link-hover textp">Pricing product</a>
              </nav>
            </footer>
          </div>
          <div className="textp text-center md:flex lg:flex md:justify-between lg:justify-between md:items-center lg:items-center mt-6">
            <p>© 2023 ItsRazib Inc. Copyright and rights reserved</p>
            <p>Terms and Condtions . Privacy Policy</p>
          </div>
        </div>
      </div>
      {/* Footer End  */}
    </div>
  );
}

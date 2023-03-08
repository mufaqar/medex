import Link from 'next/link';
import React from 'react';

export default function Contact() {
    return (
        <section className=''>
            <div className="flex justify-center items-center pt-20 min-h-[250px] lg:min-h-[350px] w-full bg-slate-100">
                <div className="w-full">
                    <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-[32px] font-bold text-center">
                        Contact Us
                    </h2>
                </div>
            </div>

            <div className="mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
                <div className="flex flex-wrap w-full xl:py-12  relative z-10">
                    <div className="w-full md:w-[50%] xl:w-[50%]">
                        <div className="">
                            <h2 className="mb-3 lg:mb-4 xl:mb-5 text-lg lg:text-xl xl:text-[22px] xl:leading-8 font-bold ">
                                Contact Us
                            </h2>
                            <div className="mx-auto space-y-4 mb-6">
                                <div className="flex flex-col lg:flex-row max-w-xs lg:max-w-sm xl:pr-7">
                                    <div className="flex-shrink-0 w-14  h-14 border-2 p-3 rounded-md">
                                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38.645 19.657L25.602 24.874C25.438 24.9398 25.289 25.0381 25.1641 25.1631C25.0391 25.288 24.9408 25.437 24.875 25.601L19.658 38.644C19.562 38.8817 19.5381 39.1423 19.5892 39.3935C19.6404 39.6447 19.7643 39.8752 19.9455 40.0565C20.1268 40.2377 20.3573 40.3616 20.6085 40.4128C20.8597 40.4639 21.1203 40.44 21.358 40.344L34.401 35.127C34.565 35.0612 34.714 34.9629 34.8389 34.8379C34.9639 34.713 35.0622 34.564 35.128 34.4L40.345 21.357C40.441 21.1193 40.4649 20.8587 40.4138 20.6075C40.3626 20.3563 40.2387 20.1258 40.0575 19.9445C39.8762 19.7633 39.6457 19.6394 39.3945 19.5882C39.1433 19.5371 38.8827 19.561 38.645 19.657V19.657ZM32.908 32.908L23.208 36.788L27.088 27.088L36.788 23.208L32.908 32.908Z" fill="#8C969F"></path><path d="M58.7 28.7H54.72C54.3937 22.5949 51.8214 16.826 47.4979 12.5033C43.1744 8.18052 37.4052 5.6092 31.3 5.284V1.3C31.3 0.954024 31.1625 0.622219 30.9179 0.377578C30.6733 0.132937 30.3415 -0.00450134 29.9955 -0.00450134C29.6495 -0.00450134 29.3177 0.132937 29.0731 0.377578C28.8284 0.622219 28.691 0.954024 28.691 1.3V5.28C22.5875 5.60861 16.821 8.18193 12.5002 12.5052C8.17932 16.8284 5.60921 22.5964 5.28398 28.7H1.29998C0.954008 28.7 0.622204 28.8374 0.377563 29.0821C0.132921 29.3267 -0.0045166 29.6585 -0.0045166 30.0045C-0.0045166 30.3505 0.132921 30.6823 0.377563 30.9269C0.622204 31.1716 0.954008 31.309 1.29998 31.309H5.27998C5.60859 37.4124 8.18191 43.179 12.5052 47.4998C16.8284 51.8207 22.5964 54.3908 28.7 54.716V58.7C28.7 59.046 28.8374 59.3778 29.0821 59.6224C29.3267 59.8671 29.6585 60.0045 30.0045 60.0045C30.3505 60.0045 30.6823 59.8671 30.9269 59.6224C31.1715 59.3778 31.309 59.046 31.309 58.7V54.72C37.4117 54.3928 43.1781 51.8214 47.4997 47.5001C51.8214 43.1789 54.3933 37.4127 54.721 31.31H58.7C59.046 31.31 59.3778 31.1726 59.6224 30.9279C59.867 30.6833 60.0045 30.3515 60.0045 30.0055C60.0045 29.6595 59.867 29.3277 59.6224 29.0831C59.3778 28.8384 59.046 28.701 58.7 28.701V28.7ZM48.261 31.306H52.108C51.7837 36.7165 49.4881 41.8207 45.6554 45.6534C41.8227 49.4861 36.7185 51.7817 31.308 52.106V48.261C31.308 47.915 31.1705 47.5832 30.9259 47.3386C30.6813 47.0939 30.3495 46.9565 30.0035 46.9565C29.6575 46.9565 29.3257 47.0939 29.0811 47.3386C28.8364 47.5832 28.699 47.915 28.699 48.261V52.108C23.2886 51.7833 18.1846 49.4876 14.352 45.655C10.5194 41.8224 8.22373 36.7184 7.89898 31.308H11.746C12.092 31.308 12.4238 31.1706 12.6684 30.9259C12.913 30.6813 13.0505 30.3495 13.0505 30.0035C13.0505 29.6575 12.913 29.3257 12.6684 29.0811C12.4238 28.8364 12.092 28.699 11.746 28.699H7.89298C8.2173 23.2885 10.5128 18.1843 14.3455 14.3516C18.1782 10.5189 23.2824 8.22332 28.693 7.899V11.746C28.693 12.092 28.8304 12.4238 29.0751 12.6684C29.3197 12.9131 29.6515 13.0505 29.9975 13.0505C30.3435 13.0505 30.6753 12.9131 30.9199 12.6684C31.1645 12.4238 31.302 12.092 31.302 11.746V7.893C36.7124 8.21774 41.8163 10.5134 45.649 14.346C49.4816 18.1786 51.7772 23.2826 52.102 28.693H48.261C47.915 28.693 47.5832 28.8304 47.3386 29.0751C47.0939 29.3197 46.9565 29.6515 46.9565 29.9975C46.9565 30.3435 47.0939 30.6753 47.3386 30.9199C47.5832 31.1646 47.915 31.302 48.261 31.302V31.306Z" fill="#8C969F"></path>
                                        </svg>
                                    </div>
                                    <div className="lg:pl-3 2xl:pl-4 mt-4 lg:mt-0">
                                        <h3 className=" text-[15px] sm:text-base font-medium">
                                            Addresses
                                        </h3>
                                        <p className="text-sm lg:leading-[27px]">
                                            Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row max-w-xs lg:max-w-sm xl:pr-7">
                                    <div className="flex-shrink-0 w-14  h-14 border-2 p-3 rounded-md">
                                        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M42.7144 47.9807H42.7143H42.7141C42.5713 47.9807 42.4403 47.9751 42.3136 47.9634C37.2374 47.4133 32.2962 45.6609 28.0226 42.8955C24.0578 40.381 20.6279 36.9567 18.1046 32.9933C15.3271 28.7134 13.5733 23.7677 13.0333 18.6915C12.9291 17.5409 13.2762 16.4236 14.0105 15.5439C14.7459 14.665 15.7784 14.1251 16.9181 14.0235C17.0427 14.0114 17.1715 14.0052 17.3003 14.0052H22.0953C22.1255 14.0045 22.1577 14.0041 22.1899 14.0041C24.2779 14.0041 26.0766 15.5877 26.3738 17.6876C26.5648 19.1393 26.9216 20.5701 27.4344 21.9413C28.0211 23.4993 27.6419 25.2725 26.4682 26.4585L25.0341 27.8897C27.039 31.1444 29.8178 33.9167 33.078 35.9149L34.5098 34.4869C35.3195 33.6882 36.3945 33.2486 37.5369 33.2486C38.052 33.2486 38.5571 33.3397 39.0382 33.5195C40.4067 34.0297 41.8365 34.3852 43.2879 34.576C45.4447 34.8794 47.0349 36.7432 46.9876 38.9115L46.9876 43.6833C46.9916 44.8258 46.5496 45.9018 45.7427 46.7127C44.9363 47.5263 43.8608 47.9767 42.7144 47.9807ZM17.3009 16.1928C17.2454 16.1928 17.1867 16.1958 17.1163 16.2022C16.5552 16.2524 16.0479 16.5172 15.6874 16.9479C15.3274 17.3781 15.1573 17.922 15.2085 18.4793C15.712 23.2044 17.3496 27.8157 19.9443 31.8131C22.3004 35.5126 25.5019 38.7084 29.2032 41.0555C33.1984 43.6407 37.8059 45.2773 42.5286 45.789C42.5803 45.7929 42.6503 45.7954 42.7127 45.7954C43.2724 45.7935 43.7986 45.5732 44.1938 45.175C44.589 44.777 44.8056 44.2495 44.8038 43.6897V38.9004L44.8036 38.8786C44.8302 37.8093 44.0525 36.894 42.9947 36.745C41.3851 36.5329 39.7966 36.1377 38.2743 35.5705C38.0364 35.4809 37.7872 35.4355 37.5332 35.4355C36.9824 35.4355 36.4421 35.6565 36.0511 36.0418L34.025 38.0629C33.8193 38.2687 33.5452 38.382 33.2534 38.382C33.0649 38.382 32.8784 38.3329 32.714 38.2399C28.5439 35.8738 25.086 32.4228 22.7139 28.2599C22.4704 27.832 22.5437 27.2914 22.8921 26.9452L24.9215 24.9188C25.4928 24.3427 25.677 23.4765 25.3904 22.7125C24.8205 21.1901 24.4236 19.6006 24.2108 17.9879C24.0639 16.965 23.1679 16.1928 22.1268 16.1928H22.1059H17.3009Z" fill="#8C969F"></path><path d="M42.7134 47.8807C43.8329 47.8768 44.883 47.4377 45.6717 46.642C46.4604 45.8492 46.8915 44.7963 46.8876 43.6827V38.9086C46.9338 36.7897 45.3861 34.9709 43.2743 34.6738C41.816 34.4821 40.3776 34.1245 39.0028 33.6119C38.5264 33.4339 38.0295 33.3473 37.5362 33.3473C36.4495 33.3473 35.3794 33.7674 34.5793 34.5566L33.0922 36.0397C29.7534 34.0082 26.9452 31.2059 24.9078 27.8741L26.3969 26.388C27.5432 25.2297 27.9138 23.4972 27.3407 21.9754C26.8261 20.5995 26.4675 19.1651 26.2748 17.7009C25.9862 15.6619 24.2472 14.1028 22.1893 14.1028C22.1578 14.1028 22.1263 14.1031 22.0947 14.1039H17.2997C17.1745 14.1039 17.0494 14.1098 16.9262 14.1218C15.8117 14.2211 14.8033 14.7496 14.0861 15.6069C13.3689 16.4661 13.0292 17.5519 13.1315 18.6804C13.6698 23.7416 15.4202 28.6748 18.1878 32.9393C20.703 36.89 24.1242 40.3052 28.0759 42.8115C32.3345 45.5671 37.2537 47.3145 42.322 47.8639C42.4511 47.8757 42.5804 47.8807 42.7134 47.8807ZM17.3003 16.0928H22.1053C22.1112 16.0928 22.1192 16.0928 22.1261 16.0928C23.2189 16.0928 24.1546 16.9014 24.3086 17.9742C24.5202 19.5776 24.9145 21.159 25.4827 22.6769C25.7827 23.4765 25.589 24.3855 24.991 24.9885L22.9615 27.015C22.6436 27.3309 22.578 27.8207 22.7996 28.2101C25.1628 32.3575 28.6078 35.7956 32.7622 38.1528C32.9158 38.2396 33.0849 38.282 33.2527 38.282C33.5094 38.282 33.7632 38.1829 33.9542 37.9919L35.9807 35.9704C36.3997 35.5576 36.9609 35.3355 37.5326 35.3355C37.7931 35.3355 38.0558 35.3816 38.3083 35.4767C39.8251 36.0419 41.4096 36.4354 43.0079 36.646C44.1156 36.802 44.9301 37.7605 44.9023 38.8761C44.9024 38.8828 44.9024 38.8918 44.9024 38.8997V43.6888C44.9044 44.2749 44.6779 44.8271 44.2637 45.2444C43.8495 45.6616 43.2971 45.8921 42.712 45.8941C42.6405 45.8941 42.5689 45.891 42.5173 45.8871C37.7769 45.3735 33.1576 43.7324 29.1493 41.1388C25.4351 38.7834 22.2245 35.5788 19.8603 31.8666C17.2566 27.8552 15.6136 23.2242 15.1089 18.4877C15.0553 17.9035 15.2341 17.3334 15.6106 16.8834C15.9881 16.4325 16.5184 16.1553 17.1066 16.1027C17.1712 16.0967 17.2357 16.0928 17.3003 16.0928ZM42.7141 48.0794H42.7138H42.7134C42.5675 48.0794 42.4336 48.0736 42.3039 48.0617C37.2107 47.5097 32.2546 45.752 27.968 42.9783C23.9917 40.4565 20.5513 37.0216 18.0202 33.046C15.2347 28.7538 13.4755 23.793 12.9339 18.7014C12.8271 17.5228 13.1823 16.3797 13.9336 15.4796C14.686 14.5802 15.7425 14.0278 16.9086 13.9239C17.0356 13.9115 17.1677 13.9052 17.2997 13.9052H22.0947C22.1233 13.9045 22.1563 13.9041 22.1893 13.9041C24.3264 13.9041 26.1674 15.5244 26.4715 17.673C26.6617 19.1183 27.0166 20.5417 27.5268 21.9058C28.127 23.4999 27.7391 25.3142 26.5381 26.5277L25.1594 27.9037C27.1392 31.0941 29.8668 33.8155 33.0627 35.7885L34.439 34.4159C35.2679 33.5984 36.3676 33.1486 37.5362 33.1486C38.0633 33.1486 38.5801 33.2418 39.0723 33.4258C40.4337 33.9334 41.8562 34.287 43.3002 34.4768C45.5077 34.7874 47.1346 36.6944 47.0862 38.913L47.0863 43.6827C47.0904 44.8513 46.6381 45.9523 45.8125 46.7821C44.9875 47.6145 43.887 48.0753 42.7141 48.0794ZM42.5355 45.6892C42.5875 45.6931 42.6532 45.6954 42.712 45.6954C43.2449 45.6936 43.7461 45.4837 44.1227 45.1044C44.4992 44.7251 44.7055 44.2226 44.7037 43.6894V38.8997L44.7037 38.8798L44.7036 38.8755L44.7037 38.8711C44.729 37.8567 43.988 36.9846 42.9802 36.8427C41.3641 36.6298 39.7683 36.2327 38.2389 35.6629C38.012 35.5774 37.7746 35.5342 37.5326 35.5342C37.0076 35.5342 36.4928 35.7448 36.1202 36.1119L34.0946 38.1326C33.8701 38.357 33.5711 38.4807 33.2527 38.4807C33.0472 38.4807 32.8437 38.4271 32.6644 38.3258C28.4787 35.9508 25.0079 32.4869 22.6269 28.3084C22.3613 27.8416 22.4413 27.2518 22.8214 26.8741L24.8506 24.8479C25.3944 24.2996 25.5698 23.4745 25.2967 22.7467C24.7242 21.2173 24.3255 19.6204 24.1116 18.0002C23.9719 17.027 23.1182 16.2914 22.1261 16.2914H22.1053H17.3003C17.2478 16.2914 17.192 16.2943 17.1247 16.3005C16.5898 16.3484 16.1064 16.6007 15.7629 17.011C15.42 17.4208 15.258 17.9388 15.3068 18.4695C15.8084 23.1778 17.4408 27.774 20.0269 31.7584C22.3757 35.4464 25.5667 38.6316 29.2558 40.971C33.2377 43.5476 37.8294 45.1788 42.5355 45.6892Z" fill="#8C969F"></path>
                                            <path d="M30.0004 59.9016C24.511 59.9016 19.1371 58.3936 14.4565 55.5402L1.53763 59.8458C1.42544 59.8828 1.30934 59.9015 1.19226 59.9015C0.898244 59.9015 0.612266 59.7804 0.407667 59.5693C0.116423 59.2704 0.021594 58.8242 0.166272 58.4326L4.73081 45.9822C1.70078 41.2014 0.0995854 35.6764 0.0995854 30.0007C0.0995854 13.5134 13.513 0.0999985 30.0003 0.0999985C46.4877 0.0999985 59.9012 13.5135 59.9012 30.0009C59.9012 46.4882 46.4878 59.9016 30.0004 59.9016ZM14.5979 53.2478C14.8049 53.2478 15.0074 53.3063 15.1833 53.4171C19.6173 56.2295 24.7412 57.716 30.0012 57.716C45.2835 57.716 57.7165 45.283 57.7165 30.0009C57.7165 14.7186 45.2835 2.28559 30.0012 2.28559C14.719 2.28559 2.28599 14.7186 2.28599 30.0009C2.28599 35.4431 3.86693 40.7142 6.85791 45.2441C7.04783 45.5318 7.09033 45.8973 6.97158 46.222L2.99946 57.055L14.2525 53.3046C14.3631 53.267 14.4795 53.2478 14.5979 53.2478Z" fill="#8C969F"></path><path d="M29.9997 0.19868C13.5672 0.19868 0.198253 13.5676 0.198253 30.0001C0.198253 35.6832 1.8016 41.1925 4.84029 45.9697L0.25879 58.4663C0.126658 58.824 0.212111 59.2263 0.478338 59.4995C0.669022 59.6962 0.927344 59.8015 1.1916 59.8015C1.29695 59.8015 1.40323 59.7846 1.50556 59.7508L14.4682 55.4307C19.1431 58.2906 24.5023 59.8016 29.9998 59.8016C46.4322 59.8016 59.8012 46.4326 59.8012 30.0002C59.8012 13.5678 46.4321 0.19868 29.9997 0.19868ZM30.0006 57.8147C24.7218 57.8147 19.5791 56.3226 15.1297 53.5005C14.9688 53.3992 14.7839 53.3464 14.5972 53.3464C14.4909 53.3464 14.3856 53.3633 14.2833 53.3981L2.83451 57.2138L6.87762 46.1872C6.98587 45.8912 6.94815 45.5614 6.77435 45.2982C3.77232 40.7515 2.18598 35.4618 2.18598 30.0002C2.18598 14.6634 14.6638 2.1856 30.0006 2.1856C45.3374 2.1856 57.8152 14.6634 57.8152 30.0002C57.8152 45.337 45.3374 57.8147 30.0006 57.8147ZM29.9997 0C46.5418 0 59.9999 13.458 59.9999 30.0002C59.9999 46.5423 46.5419 60.0003 29.9998 60.0003C24.5076 60.0003 19.1304 58.4956 14.4436 55.6483L1.56838 59.9393C1.44586 59.9798 1.31928 60.0002 1.1916 60.0002C0.87085 60.0002 0.558872 59.8681 0.335667 59.6378C0.0180203 59.3118 -0.0854519 58.8248 0.0724299 58.3975L4.62003 45.9933C1.59686 41.2061 -0.000426966 35.6783 -0.000426966 30.0001C-0.000426966 13.458 13.4576 0 29.9997 0ZM30.0006 57.616C45.2281 57.616 57.6165 45.2276 57.6165 30.0002C57.6165 14.7727 45.2281 2.38428 30.0006 2.38428C14.7731 2.38428 2.38466 14.7727 2.38466 30.0002C2.38466 35.423 3.95993 40.6751 6.94015 45.1887C7.14735 45.5025 7.19373 45.9013 7.0642 46.2555L3.16307 56.8948L14.2204 53.2097C14.3408 53.1687 14.4679 53.1478 14.5972 53.1478C14.823 53.1478 15.0437 53.2116 15.2355 53.3323C19.6539 56.1349 24.7594 57.616 30.0006 57.616Z" fill="#8C969F"></path>
                                        </svg>
                                    </div>
                                    <div className="lg:pl-3 2xl:pl-4 mt-4 lg:mt-0">
                                        <h3 className=" text-15px sm:text-base font-medium">
                                            Phone Number
                                        </h3>
                                        <Link href="telto:+82-10-2320-8582" target="_blank" className="text-sm lg:leading-[27px]">
                                            +82-10-2320-8582
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row max-w-xs lg:max-w-sm xl:pr-7">
                                    <div className="flex-shrink-0 w-14  h-14 border-2 p-3 rounded-md">
                                        <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.6624 52.3463C47.8268 52.5976 47.9401 52.8788 47.9958 53.1739C48.0514 53.469 48.0484 53.7721 47.9869 54.066C47.9254 54.3599 47.8066 54.6388 47.6372 54.8868C47.4679 55.1348 47.2514 55.347 47 55.5112C42.2484 58.6196 36.6926 60.273 31.0146 60.2683H31.001C25.2325 60.2683 19.5927 58.5637 14.7899 55.3687C9.98709 52.1737 6.2355 47.6307 4.00636 42.3103C1.77722 36.99 1.16993 31.1296 2.26077 25.4652C3.35161 19.8008 6.09195 14.5851 10.1376 10.4732C12.8316 7.71942 16.0462 5.52856 19.5943 4.02791C23.1424 2.52726 26.9534 1.74674 30.8058 1.73171H31.001C37.0989 1.727 43.0433 3.64339 47.9902 7.20878C52.9046 10.7074 56.6256 15.6313 58.6497 21.3141C58.7506 21.597 58.7947 21.897 58.7796 22.1969C58.7645 22.4969 58.6905 22.7909 58.5617 23.0622C58.433 23.3336 58.2521 23.5769 58.0293 23.7783C57.8066 23.9797 57.5463 24.1353 57.2634 24.2361C56.9805 24.3369 56.6805 24.3811 56.3806 24.3659C56.0807 24.3508 55.7866 24.2768 55.5153 24.1481C55.244 24.0193 55.0007 23.8384 54.7993 23.6157C54.5978 23.3929 54.4423 23.1326 54.3415 22.8498C52.6301 18.023 49.4691 13.8428 45.2911 10.8811C41.1132 7.91949 36.1222 6.32101 31.001 6.30439H30.8351C24.3084 6.36098 18.0695 8.99905 13.4821 13.642C8.8947 18.2849 6.33186 24.5551 6.35378 31.082C6.3757 37.6089 8.98058 43.8617 13.5991 48.4737C18.2176 53.0858 24.474 55.6819 31.001 55.6946H31.0117C35.8017 55.6993 40.4889 54.305 44.4976 51.6829C44.7489 51.5186 45.0302 51.4054 45.3253 51.3498C45.6204 51.2942 45.9235 51.2973 46.2174 51.3589C46.5114 51.4205 46.7903 51.5394 47.0382 51.7088C47.2861 51.8783 47.4982 52.0949 47.6624 52.3463V52.3463ZM60.2693 33.401C60.2695 35.6484 59.5418 37.8355 58.1951 39.6349C56.8484 41.4342 54.9551 42.7489 52.7987 43.3823C50.6423 44.0157 48.3388 43.9336 46.233 43.1483C44.1272 42.3631 42.3323 40.9169 41.1171 39.0263C39.5146 41.0482 37.3435 42.544 34.8835 43.3211C32.4234 44.0983 29.787 44.1211 27.3138 43.3867C24.8407 42.6523 22.644 41.1943 21.0068 39.2005C19.3695 37.2067 18.3667 34.7684 18.1274 32.1996C17.8881 29.6309 18.4233 27.0493 19.6641 24.7874C20.9049 22.5255 22.7944 20.6868 25.0894 19.5082C27.3843 18.3296 29.9795 17.8651 32.5408 18.1744C35.1021 18.4838 37.5121 19.5528 39.4605 21.2439V20.84C39.4542 20.5358 39.5087 20.2334 39.6208 19.9505C39.7328 19.6676 39.9002 19.4099 40.1132 19.1925C40.3261 18.9751 40.5803 18.8025 40.8608 18.6846C41.1413 18.5667 41.4425 18.5059 41.7468 18.5059C42.0511 18.5059 42.3523 18.5667 42.6329 18.6846C42.9134 18.8025 43.1675 18.9751 43.3805 19.1925C43.5934 19.4099 43.7608 19.6676 43.8729 19.9505C43.985 20.2334 44.0394 20.5358 44.0332 20.84V33.401C44.053 34.9343 44.676 36.3981 45.7674 37.4754C46.8587 38.5527 48.3304 39.1568 49.8639 39.1568C51.3974 39.1568 52.8691 38.5527 53.9604 37.4754C55.0518 36.3981 55.6748 34.9343 55.6946 33.401C55.6883 33.0968 55.7428 32.7943 55.8549 32.5114C55.967 32.2286 56.1344 31.9709 56.3473 31.7535C56.5602 31.5361 56.8144 31.3634 57.0949 31.2455C57.3755 31.1276 57.6767 31.0669 57.981 31.0669C58.2853 31.0669 58.5865 31.1276 58.867 31.2455C59.1475 31.3634 59.4017 31.5361 59.6146 31.7535C59.8275 31.9709 59.9949 32.2286 60.107 32.5114C60.2191 32.7943 60.2736 33.0968 60.2673 33.401H60.2693ZM39.3463 31C39.3463 29.3492 38.8568 27.7355 37.9397 26.3629C37.0225 24.9903 35.7189 23.9206 34.1938 23.2889C32.6686 22.6572 30.9904 22.492 29.3713 22.8141C27.7523 23.1362 26.2651 23.9312 25.0979 25.0986C23.9307 26.2659 23.1358 27.7532 22.8139 29.3723C22.492 30.9914 22.6574 32.6696 23.2893 34.1947C23.9211 35.7198 24.991 37.0232 26.3637 37.9402C27.7364 38.8572 29.3502 39.3465 31.001 39.3463C33.2137 39.3438 35.335 38.4636 36.8995 36.8988C38.4641 35.3341 39.344 33.2127 39.3463 31Z" fill="#8C969F" stroke="white" strokeWidth="1.5"></path>
                                        </svg>
                                    </div>
                                    <div className="lg:pl-3 2xl:pl-4 mt-4 lg:mt-0">
                                        <h3 className=" text-15px sm:text-base font-medium">
                                            Email
                                        </h3>
                                        <Link href="mailto:sonomedex@gmail.com" target="_blank" className="text-sm lg:leading-[27px]">
                                            sonomedex@gmail.com
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row max-w-xs lg:max-w-sm xl:pr-7">
                                    <div className="flex-shrink-0 w-14  h-14 border-2 p-3 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C969F">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                    </div>
                                    <div className="lg:pl-3 2xl:pl-4 mt-4 lg:mt-0">
                                        <h3 className=" text-15px sm:text-base font-medium">
                                            Timing
                                        </h3>
                                        <p className="text-sm lg:leading-[27px]">
                                            Monday to Friday: 10am to 7pm
                                            Saturday: 10am to 4pm
                                            Sunday: 12am to 4pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] xl:w-[50%] pb-0.5 lg:pl-12 pt-1.5">
                        <form className="space-y-5">
                            <div className="block">
                                <label htmlFor="name" className="block  opacity-70 font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer">
                                    Full Name (required)
                                </label>
                                <input type="text" id="name" name="name" placeholder="Enter Your Full Name" className="py-2 px-4 w-full appearance-none border text-input text-[13px] lg:text-sm rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out focus:border-2 focus:outline-none h-11 md:h-12" />
                            </div>
                            <div className="block">
                                <label htmlFor="email" className="block  opacity-70 font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer">
                                    Email Address (required)
                                </label>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email" className="py-2 px-4 w-full appearance-none border text-input text-[13px] lg:text-sm rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out focus:border-2 focus:outline-none h-11 md:h-12" />
                            </div>
                            <div className="block">
                                <label htmlFor="phone" className="block  opacity-70 font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer">
                                    Phone (Optional)
                                </label>
                                <input type="text" id="phone" name="phone" placeholder="Enter Your Phone" className="py-2 px-4 w-full appearance-none border text-input text-[13px] lg:text-sm rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out focus:border-2 focus:outline-none h-11 md:h-12" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block  opacity-70 font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer">
                                    Message
                                </label>
                                <textarea id="message" name="message" className="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out  text-[13px] lg:text-sm focus:outline-none focus:ring-0 placeholder-[#B3B3B3] border focus:bg-white focus:border-2" rows={4} placeholder="Briefly describe.."></textarea>
                            </div>
                            <button className="text-sm lg:text-[15px] leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-[#BF1800]  text-white  px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 w-full" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d405010.10440433753!2d126.751814!3d37.528163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7d4b3a3457a3%3A0x10e419c014a0079!2sWonmi-gu%2C%20Bucheon-si%2C%20Gyeonggi-do%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1678282798612!5m2!1sen!2sus" allowFullScreen={true} loading="lazy" className='w-full h-[300px]'></iframe>
            </div>
        </section>
    )
}

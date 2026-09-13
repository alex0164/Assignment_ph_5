import banner from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto min-h-100 items-center'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-bold'>Build Your Ideal <br />
                <span className='bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Development Stack</span></h1>
                  <h4 className='text-lg text-gray-600'>
                    Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.
                  </h4>
                <div className="flex space-x-4">
                     <button className="btn bg-[#622069] text-white border-[#591660]">
                  <svg aria-label="Slack logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g strokeLinecap="round" strokeWidth="78"><path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1"></path><path stroke="#2eb67d" d="m305 110v97m97 0v.1h.1"></path><path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1"></path><path stroke="#e01e5a" d="M110 305h.1v.1m97 0v97"></path></g></svg>
                     Explore Technologies
                    </button>
                    <button className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Learn More
                     </button>
                </div>
            </div>
            <div>
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
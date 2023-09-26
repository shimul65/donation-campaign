
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="">
                <div className="bg-white opacity-10 -mt-24">
                    <img className="" src="https://i.ibb.co/k5VWkkq/rectangle-4281.jpg" alt="" />
                </div>
                <div className="text-center text-neutral-content relative bottom-80">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black ">I Grow By Helping People In Need</h1>
                        <div className="mt-8">
                            <div className="input-group flex justify-center">
                                <input type="text" placeholder="Search…" className="input input-bordered w-1/3" />
                                <button className="btn btn-primary bg-[#FF444A] border-none">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
export const PersonalInfo = () => {
    return (
        <div className="2xl:space-y-4 xl:space-y-4 lg:space-y-4 md:space-y-2 sm:space-y-2 space-y-2 flex-col pt-10">
            <img
                className="rounded-full 2xl:w-56 2xl:h-56 xl:w-56 xl:h-56 lg:w-56 lg:h-56 md:w-56 md:h-56 sm:w-32 sm:h-32 w-32 h-32"
                src="https://avatars.githubusercontent.com/u/13748138?s=400&u=cfa7aa7b0688ef674d8eb487bbe27af132f39093&v=4"
                alt="profile"
            />
            <div className="font-maple-bold 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-2xl text-2xl">
                Yangjin Cho
            </div>
            <div className="font-maple-light 2xl:text-2xl xl:text-2xl lg:text-xl md:text-sm sm:text-sm text-xs">
                Student, Front-End Engineer & Gamer
            </div>
        </div>
    );
};

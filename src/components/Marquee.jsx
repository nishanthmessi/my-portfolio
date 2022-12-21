const Marquee = () => {
  return (
      <div className="relative overflow-x-hidden w-full h-[70px] md:h-[150px]">
        <div className="absolute animate-marquee whitespace-nowrap mt-5">
          <span className="text-5xl md:text-[100px] font-bold uppercase">
          You can do anything you set your mind to. You can do anything you set your mind to. You can do anything you set your mind to. You can do anything you set your mind to. You can do anything you set your mind to.
          </span>
        </div>
      </div>
  )
}

export default Marquee
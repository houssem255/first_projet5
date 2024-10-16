import { CarouselDefault } from "../Carasoul";

export default function Second() {
  return (
    <section className="w-full md:w-2/2 flex flex-col ">
      <div className="w-full h-1/2 flex justify-center items-center relative  ">
        <div className=" border-red-500  border- rounded p- w-12/12 ">
          <CarouselDefault />
        </div>
      </div>
    </section>
  );
}

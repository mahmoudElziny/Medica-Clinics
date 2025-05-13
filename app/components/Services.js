import Image from "next/image";
import plasticSurgery from "../../public/pexels-shvetsa-4586713.jpg";
import laserTreatment from "../../public/female-patient-receiving-cosmetic-treatment.jpg";
import dental from "../../public/pexels-karolina-grabowska-6627524.jpg";

export default function Services() {
  return (
    <section className="bg-white mt-14 px-20 py-10">
      <h2 className="text-2xl font-semibold text-center title">Our Services</h2>
      <div className="flex justify-between items-center gap-5 mt-16">
        <div className="w-1/3 bg-red-500">
          <div>
            <Image
              src={plasticSurgery}
              alt="plastic surgery"
              className="img-p"
            />
          </div>
          <div className="text-center">
            <h3>Plastic Surgery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit voluptate
              necessitatibus necessitatibus necessitatibus
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-red-500">
          <Image src={laserTreatment} alt="laser treatment" className="img-p" />
          <div className="text-center">
            <h3>Laser Treatment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit voluptate
              necessitatibus necessitatibus necessitatibus
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-red-500">
          <Image src={dental} alt="dental" className="img-p" />
          <div className="text-center">
            <h3>Dental Care</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit voluptate
              necessitatibus necessitatibus necessitatibus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

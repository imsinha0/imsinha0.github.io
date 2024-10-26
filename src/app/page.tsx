import Image from "next/image";


export default function Home() {
  return (
    <div>
      <h1>My Homepage</h1>
      <p>Welcome to my homepage!</p>
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}

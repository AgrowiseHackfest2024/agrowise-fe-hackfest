import data from "../../../../public/data/benih.json";

const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const benih = data.seeds.find((benih) => benih.id === parseInt(id));
  console.log(benih);
  return <div className="py-20 min-h-screen"></div>;
};

export default Page;

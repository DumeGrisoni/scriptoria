import WritingContainer from '../components/writing/WritingContainer';

const Writing = () => {
  return (
    <div className=" w-full flex flex-col gap-4 items-center justify-start">
      <h1 className="text-4xl font-bold ">Ecrire le Roman</h1>
      <div className="h-[1px] w-[95%] bg-slate-500 mx-auto" />
      <WritingContainer />
    </div>
  );
};

export default Writing;

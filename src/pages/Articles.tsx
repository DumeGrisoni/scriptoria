import ListArticles from '../components/articles/ListArticles';

const Articles = () => {
  return (
    <div className=" w-full flex flex-col gap-4 items-center justify-start">
      <h1 className="text-4xl font-bold ">Voir les Articles</h1>
      <div className="h-[1px] w-[95%] bg-slate-500 mx-auto" />
      <ListArticles />
    </div>
  );
};

export default Articles;

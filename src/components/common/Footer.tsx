import { FC } from "react";

const Footer: FC = () => {
  // netlify badge [![Netlify Status](https://api.netlify.com/api/v1/badges/e9e894ca-1367-47ef-8eab-fcc09c162185/deploy-status)](https://app.netlify.com/sites/own-money/deploys)
  return (
    <footer className="bg-zinc-800 text-neutral-50 dark:bg-primary">
      <div className="mx-auto w-full max-w-screen-xl space-y-12 px-8 pb-0 pt-8 md:px-20">
        <div className="grid grid-cols-1 gap-4 text-center lg:grid-cols-3 xl:grid-cols-5 [&>*]:border">
          <div className="col-span-1 space-y-12 text-left lg:col-span-2">
            <h2 className="inline-block scroll-m-20 space-y-12 bg-gradient-to-tr from-orange-600 to-orange-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-primary dark:to-secondary lg:text-4xl">
              Own Income <div>V 1.0</div>
            </h2>
            <p>
              The best design for your web studio website. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper. Vitae nulla nunc
              euismod vel pretium tellus accumsan semper.
            </p>
          </div>
          <div>
            <p>Header</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <p>Header</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <p>Header</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between border-t border-neutral-600 py-4">
          <span>&copy;2023 Own Money</span>
          <span>Terms and conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

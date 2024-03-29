import { FC } from "react";

const Footer: FC = () => {
  // netlify badge [![Netlify Status](https://api.netlify.com/api/v1/badges/e9e894ca-1367-47ef-8eab-fcc09c162185/deploy-status)](https://app.netlify.com/sites/own-money/deploys)
  return (
    <footer className="bg-zinc-800 dark:bg-primary text-neutral-50">
      <div className="mx-auto w-full max-w-screen-xl md:px-20 space-y-12 px-8 pb-0 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-center [&>*]:border">
          <div className="col-span-1 lg:col-span-2 text-left space-y-12">
            <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl bg-gradient-to-tr from-orange-600 to-orange-300 dark:from-primary dark:to-secondary inline-block text-transparent bg-clip-text space-y-12">Own Income <div>V 1.0</div></h2>
            <p>The best design for your web studio website. Vitae nulla nunc euismod vel pretium tellus accumsan semper. Vitae nulla nunc euismod vel pretium tellus accumsan semper.
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
            </ul></div>
          <div>
            <p>Header</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul></div>
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
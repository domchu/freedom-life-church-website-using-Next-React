import components from "../components.module.css";

const ReadBlog = () => {
  return (
    <>
      <div className={components.world__container}>
        <div className={components.world__text}>
          <Text className={components.world__title}>
            WE WANT TO <br />
            SERVE THE WORLD
            <br /> AROUND US
          </Text>
          <p>
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Eaque, tenetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;

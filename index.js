window.onload = () => {
  //所有请求的url，都是通过baseurl进行拼接的
  const baseUrl = `http://1.15.88.222:3000`;

  //请求到轮播图的数据
  const getBannerData = async () => {
    // 1.从服务获取轮播图数据
    const bannerData = await axios.get(`${baseUrl}/banner`);
    console.log(bannerData);
    // 2.处理数据
    // 解构，从bannerData中获取状态和轮播图数据
    const {
      status,
      data: { banners },
    } = bannerData;
    // 判断，请求成功，我们走渲染逻辑
    if (status === 200) {
      // 处理数据，将轮播图数据，处理为图片的url数组
      const imgList = banners.map((banner) => {
        const { imageUrl } = banner;
        return imageUrl;
      });
      console.log(imgList);
      const swiperWrapper = document.querySelector(".swiper-wrapper");
      // 3.使用数据渲染页面
      imgList.forEach((img) => {
        // 创建一个div
        const swiperSlide = document.createElement("div");
        // 指定div的class为swiper-slide
        swiperSlide.className = "swiper-slide";
        // 1.可以添加一个img 2.替换背景图
        swiperSlide.style.background = `url(${img}) no-repeat`;
        swiperSlide.style.backgroundSize = "100% 100%";
        swiperWrapper.appendChild(swiperSlide);
      });

    //   我们需要在页面渲染之后，再初始化轮播图
      new Swiper(".swiper", {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  };

  getBannerData();
};

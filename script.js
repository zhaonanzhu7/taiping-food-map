const restaurants = [
  {
    name: "糯米帝·温州灵魂厨房",
    meetAt: "温州厨房",
    category: "小吃快餐 / 南京西路商圈",
    image: "./assets/restaurants/p1-04.png",
    tags: ["糯米饭", "快吃", "温州味", "下班路上"],
    review:
      "适合那种不想正式吃饭、但又想吃点有记忆点东西的晚上。糯米饭和温州小吃会让人很快进入舒服状态。",
    address: "上海市静安区新闸路1219号",
    mapQuery: "糯米帝·温州灵魂厨房 新闸路1219号 上海",
    dianpingUrl:
      "https://m.dianping.com/shopinfo/l2U9Sb9EmN0rEnTJ?msource=Appshare2021&utm_source=shop_share&shoptype=10&shopcategoryid=112&cityid=1&isoversea=0",
    travel: { distance: "约 900 m", walk: "约 13 分钟", bike: "约 5 分钟" },
  },
  {
    name: "枣子树·素食餐厅",
    meetAt: "素食餐厅",
    category: "素食 / 南京西路商圈",
    image: "./assets/restaurants/p1-10.png",
    tags: ["素食", "有大桌", "带爸妈", "稳定"],
    review:
      "想吃得清爽一点时很适合。它不是只靠概念取胜的素食店，更像一间可以认真吃一顿饭的餐厅。",
    address: "上海市静安区奉贤路258号",
    mapUrl: "https://www.amap.com/place/B00154YS3A",
    dianpingUrl: "https://m.dianping.com/shop/502507",
    travel: { distance: "约 1.1 km", walk: "约 16 分钟", bike: "约 6 分钟" },
  },
  {
    name: "ZUP PIZZA BAR",
    meetAt: "比萨店",
    category: "比萨 / 南京西路商圈",
    image: "./assets/restaurants/p2-04.png",
    tags: ["披萨", "朋友来", "露台", "轻松"],
    review:
      "适合朋友来家附近时约在这里，不用解释太多，披萨、饮料和一点点热闹就够了。",
    address: "上海市静安区陕西北路457号何东旧居4幢沿街1层",
    mapQuery: "ZUP PIZZA BAR 上海市静安区陕西北路457号何东旧居4幢沿街1层",
    dianpingUrl: "https://m.dianping.com/shop/1286361941",
    travel: { distance: "约 800 m", walk: "约 12 分钟", bike: "约 5 分钟" },
  },
  {
    name: "香江姳苑（静安店）",
    meetAt: "茶餐厅",
    category: "茶餐厅 / 静安寺商圈",
    image: "./assets/restaurants/p2-06.png",
    tags: ["港式", "可预订", "大桌", "日常聚餐"],
    review:
      "当大家想吃点熟悉的港式味道时，它是一个不太需要冒险的选择。适合随便约，也适合多人吃。",
    address: "上海市静安区北京西路1700号-1",
    mapUrl: "https://www.amap.com/place/B0FFHR0E1O",
    dianpingUrl: "https://m.dianping.com/shop/1311242670",
    travel: { distance: "约 2.1 km", walk: "约 30 分钟", bike: "约 10 分钟" },
  },
  {
    name: "KLAY现代印度餐厅",
    meetAt: "印度餐厅",
    category: "东南亚菜 / 南京西路商圈",
    image: "./assets/restaurants/p2-08.png",
    tags: ["香料", "老洋房", "可预订", "适合约"],
    review:
      "想从家附近短暂出走一下，可以来这里。香料感、老洋房和比较完整的用餐氛围都在。",
    address: "上海市静安区北京西路1124号1楼",
    mapQuery: "KLAY现代印度餐厅 北京西路1124号1楼 上海",
    dianpingUrl: "https://m.dianping.com/shop/1072580168",
    travel: { distance: "约 1.0 km", walk: "约 15 分钟", bike: "约 6 分钟" },
  },
  {
    name: "晓平饭店（吴兴路店）",
    meetAt: "本帮饭店",
    category: "本帮菜 / 肇嘉浜路",
    image: "./assets/restaurants/p2-09.png",
    tags: ["本帮菜", "老字号", "大桌", "家常"],
    review:
      "这类店像一个备选答案：不知道吃什么时，上海菜总能把一顿饭稳稳接住。",
    address: "上海市徐汇区吴兴路279号",
    mapQuery: "晓平饭店 吴兴路279号 上海",
    dianpingUrl: "https://m.dianping.com/shop/1083212948",
    travel: { distance: "约 4.8 km", walk: "约 68 分钟", bike: "约 22 分钟" },
  },
  {
    name: "Duli 度粒",
    meetAt: "融合素食",
    category: "素食 / 曹家渡商圈",
    image: "./assets/restaurants/p2-10.png",
    tags: ["素食", "可带宠物", "可预订", "小聚"],
    review:
      "适合想吃得轻一点、慢一点的时候。它的气质更像一间安静小馆，不急着把饭吃完。",
    address: "上海市静安区延平路223弄2-4号益民公寓",
    mapUrl: "https://www.amap.com/place/B0KGDDLY7S",
    dianpingUrl: "https://m.dianping.com/shop/762929538",
    travel: { distance: "约 2.4 km", walk: "约 34 分钟", bike: "约 12 分钟" },
  },
  {
    name: "阿王煮物铺·融合料理",
    meetAt: "煮物铺",
    category: "快餐简餐 / 同乐坊",
    image: "./assets/restaurants/p3-04.png",
    tags: ["融合料理", "快吃", "可预订", "小店"],
    review:
      "名字就很适合被放进这张地图里。适合临时起意，也适合一个人或两个人轻轻松松吃。",
    address: "上海 同乐坊 / 江宁路",
    mapQuery: "阿王煮物铺·融合料理 上海 同乐坊 江宁路",
    dianpingUrl: "https://m.dianping.com/shop/1229531793",
    travel: { distance: "约 1.7 km", walk: "约 24 分钟", bike: "约 8 分钟" },
  },
  {
    name: "御鲤湘（北京西路店）",
    meetAt: "湘菜馆",
    category: "湘菜 / 静安寺商圈",
    image: "./assets/restaurants/p3-06.png",
    tags: ["湘菜", "想吃辣", "大桌", "免费Wi-Fi"],
    review:
      "想吃辣、想让一顿饭有精神时，可以把它放进候选。适合几个人一起点菜分享。",
    address: "上海市静安区北京西路1135号",
    mapUrl: "https://www.amap.com/place/B0FFGYTEVQ",
    dianpingUrl: "https://m.dianping.com/shop/66414204",
    travel: { distance: "约 950 m", walk: "约 14 分钟", bike: "约 5 分钟" },
  },
  {
    name: "GēN·根",
    meetAt: "老洋房餐厅",
    category: "特色菜 / 南京西路商圈",
    image: "./assets/restaurants/p3-08.png",
    tags: ["老洋房", "可带宠物", "可包场", "氛围"],
    review:
      "更像一个需要一点仪式感的选择。不是每天都去，但会在某些晚上刚好想起它。",
    address: "上海市静安区武定路550-106号",
    mapQuery: "GēN·根 武定路550-106号 上海",
    dianpingUrl: "https://m.dianping.com/shop/lasC5tElR2eoeKB4",
    travel: { distance: "约 1.9 km", walk: "约 27 分钟", bike: "约 9 分钟" },
  },
  {
    name: "香椿故事（静安寺店）",
    meetAt: "山海素食馆",
    category: "素食 / 静安寺商圈",
    image: "./assets/restaurants/p3-09.png",
    tags: ["素食", "山海味", "可预订", "小清新"],
    review:
      "素食但不寡淡，适合想认真吃一顿清净饭的时候。名字和画面都很适合收藏。",
    address: "上海市静安区愚园路157号福慧楼3楼",
    mapQuery: "香椿故事 静安寺店 愚园路157号福慧楼3楼 上海",
    dianpingUrl: "https://m.dianping.com/shop/907380563",
    travel: { distance: "约 2.0 km", walk: "约 29 分钟", bike: "约 10 分钟" },
  },
  {
    name: "陶香煲仔饭（北京西路店）",
    meetAt: "煲仔饭店",
    category: "快餐简餐 / 南京西路商圈",
    image: "./assets/restaurants/p3-10.png",
    tags: ["煲仔饭", "快吃", "北京西路", "热乎"],
    review:
      "天气冷、只想吃一份热热的饭时，它应该排得很靠前。简单，但很有用。",
    address: "上海市静安区北京西路1060号食博汇2楼",
    mapQuery: "陶香煲仔饭 北京西路1060号食博汇2楼 上海",
    dianpingUrl: "https://m.dianping.com/shop/1067230832",
    travel: { distance: "约 1.2 km", walk: "约 17 分钟", bike: "约 6 分钟" },
  },
];

const track = document.querySelector("#restaurantTrack");
const home = document.querySelector("#home");
const detail = document.querySelector("#detail");
const backButton = document.querySelector("#backButton");
const detailCount = document.querySelector("#detailCount");
const detailPhoto = document.querySelector("#detailPhoto");
const detailScene = document.querySelector("#detailScene");
const detailCategory = document.querySelector("#detailCategory");
const detailName = document.querySelector("#detailName");
const detailTags = document.querySelector("#detailTags");
const detailReview = document.querySelector("#detailReview");
const mapShopName = document.querySelector("#mapShopName");
const mapAddress = document.querySelector("#mapAddress");
const walkDistance = document.querySelector("#walkDistance");
const walkTime = document.querySelector("#walkTime");
const bikeTime = document.querySelector("#bikeTime");
const mapLink = document.querySelector("#mapLink");
const dianpingLink = document.querySelector("#dianpingLink");

function searchUrl(base, query) {
  return `${base}${encodeURIComponent(query)}`;
}

function amapSearchUrl(restaurant) {
  const query = restaurant.mapQuery || `${restaurant.name} ${restaurant.address}`;
  return searchUrl("https://uri.amap.com/search?city=上海&callnative=1&keyword=", query);
}

function renderTrack() {
  track.innerHTML = restaurants
    .map(
      (restaurant, index) => `
        <button class="place-button" type="button" data-index="${index}">
          <span>${restaurant.meetAt}</span>
        </button>
      `,
    )
    .join("");
}

function openRestaurant(index) {
  const restaurant = restaurants[index];
  detailCount.textContent = `${String(index + 1).padStart(2, "0")} / ${restaurants.length}`;
  detailPhoto.src = restaurant.image;
  detailPhoto.alt = restaurant.name;
  detailScene.textContent = `在 ${restaurant.meetAt} 见`;
  detailCategory.textContent = restaurant.category;
  detailName.textContent = restaurant.name;
  detailTags.innerHTML = restaurant.tags.map((tag) => `<span>${tag}</span>`).join("");
  detailReview.textContent = restaurant.review;
  mapShopName.textContent = restaurant.meetAt;
  walkDistance.textContent = restaurant.travel.distance;
  walkTime.textContent = restaurant.travel.walk;
  bikeTime.textContent = restaurant.travel.bike;
  mapAddress.textContent = `${restaurant.address}。时间为从太平花园出发的估算值。`;
  mapLink.href = restaurant.mapUrl || amapSearchUrl(restaurant);
  dianpingLink.href =
    restaurant.dianpingUrl || searchUrl("https://www.dianping.com/search/keyword/1/0_", restaurant.name);
  home.hidden = true;
  detail.hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" });
}

renderTrack();

track.addEventListener("click", (event) => {
  const button = event.target.closest(".place-button");
  if (!button) return;
  openRestaurant(Number(button.dataset.index));
});

document.querySelector(".rail-button.prev").addEventListener("click", () => {
  track.scrollBy({ left: -track.clientWidth * 0.7, behavior: "smooth" });
});

document.querySelector(".rail-button.next").addEventListener("click", () => {
  track.scrollBy({ left: track.clientWidth * 0.7, behavior: "smooth" });
});

backButton.addEventListener("click", () => {
  detail.hidden = true;
  home.hidden = false;
});

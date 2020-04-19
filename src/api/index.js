import ajax from "./ajax"
// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/${geohash}');
// 获取视频分类信息
export const reqFoods = () => ajax("/index_category");
// 根据经纬度获取商铺列表
export const reqShopLost = (longitude,latitude)　=> ajax('/shops',{longitude,latitude});
// export const reqShopLost = (a,b)　=> ajax('/shops',{longitude:a,latitude:b});
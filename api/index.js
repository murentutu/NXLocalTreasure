import request from "../utils/request.js"
// 使用API对页面请求函数进行封装，方便后续的管理
export const getSlides = () => {
    return request.get('/slides')
}

export const getCategories = () => {
    return request.get('/categories')
}

export const getCategoriesById = (id) => {
    return request.get('/categories/' + id)
}

export const getShops = ({
    id,
    page,
    limit
}) => {
    return request.get(`/shops?categoryId=${id}&_page=${page}&_limit=${limit}/` + id)
}
export const getShopsById = (id) => {
        return request.get(`/shops/`+ id)
}
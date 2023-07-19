import { interestedFinalData } from "../models/authentication/interested.model"
import { Search } from "../models/authentication/seller-search.model"

export const endPoints = {
    signup: '/api/auth/signup',
    login: '/api/auth/signin',
    logout: '/api/auth/signout',
    addSelerProperty: '/api/seller/create',
    updateSelerProperty: (id: number) => {
        return '/api/seller/update/' + id
    },
    getSelerProperty: '/api/seller/view-all',
    getSelerPropertyById: (id: number) => {
        return '/api/seller/view?id=' + id
    },
    deleteSelerPropertyById: (id: number) => {
        return '/api/seller/delete?id=' + id
    },
    sellerAdvanceSearch: (obj: Search) => {
        return '/api/seller/filter?minPrice=' + obj['minPrice'] + '&maxPrice=' + obj['maxPrice'] + '&type=' + obj['type']
    },
    buyerViewAll: (obj: Search) => {
        return '/api/buyer/filter?minPrice=' + obj['minPrice'] + '&maxPrice=' + obj['maxPrice'] + '&type=' + obj['type']
    },
    buyerInterested: '/api/buyer/show-interest',
    getAgentDashboard: '/api/seller/dashboard/count',
    getBuyerDashboard: '/api/buyer/dashboard/count'
}
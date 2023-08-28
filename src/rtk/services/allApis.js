import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../utils/baseQuery";

export const allApis = createApi({
    reducerPath: "allApis",
    baseQuery,
    endpoints: (builder) => ({
        getGalleryItems: builder.query({
            query: (body) => {
                return {
                    url: `/api/galleries?populate=*`,
                };
            },
        }),
        getExpertiseItems: builder.query({
            query: (body) => {
                return {
                    url: `/api/expertise?${body?.url}`,
                };
            },
        }),
        getExperienceItems: builder.query({
            query: (body) => {
                return {
                    url: `/api/experiences?populate=*`,
                };
            },
        }),
        getSubContinentsItems: builder.query({
            query: (body) => {
                return {
                    url: `/api/subcontinents?populate=*`,
                };
            },
        }),
    })
});
export const {
    useGetGalleryItemsQuery,
    useGetExpertiseItemsQuery,
    useGetExperienceItemsQuery,
    useGetSubContinentsItemsQuery,
} = allApis;
export default defineEventHandler(async (event) => {
    console.log("here") ;
    let url = process.env.API_URL+'/dashboard' ;
    const { data } = await $fetch('')
    return { message: url } 
})
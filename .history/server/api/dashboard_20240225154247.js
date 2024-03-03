export default defineEventHandler(async (event) => {
    console.log("here") ;
    
    const { data } = await $fetch('')
    return { message: "Hello API" } 
})
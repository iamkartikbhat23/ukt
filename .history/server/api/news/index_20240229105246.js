export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { offset } = getQ ;

    let url = config.apiURL+'news/'+offset ;
    console.log(url)
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return { data } 
})
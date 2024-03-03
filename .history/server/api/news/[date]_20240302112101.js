export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig() ;
    const { date } = event.context.params ;
    let url = config.apiURL+'dateNews/'+date ;
    const { data } = await $fetch(url,{
        headers: {
	    	"Accept": "application/json"
	  	},
    }) ;
    return  data 
})
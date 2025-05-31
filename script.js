//your JS code here. If required.
const input=document.querySelector("#ip");
const button=document.querySelector("#btn");
const output=document.querySelector("#output");
button.addEventListener("click",()=>{
	const val=parseInt(input.value);
	return new Promise((resolve)=>{

		setTimeout(()=>{
			output.textContent=`Result: ${val}`
			resolve(val);
		},2000)
		
	}).
		then((val)=>{
			return new Promise((resolve)=>{
				setTimeout(()=>{
					val=val*2;
					output.textContent=`Result: ${val}`
			        resolve(val);
				},2000)
			})
			
		}).
		then((val)=>{
			return new Promise((resolve)=>{
				setTimeout(()=>{
					val=val-3;
					output.textContent=`Result: ${val}`
			        resolve(val);
				},1000)
			})
			
		}).
         then((val)=>{
			return new Promise((resolve)=>{
				setTimeout(()=>{
					val=val/2;
					output.textContent=`Result: ${val}`
			        resolve(val);
				},1000)
			})
			
		}).
          then((val)=>{
			return new Promise((resolve)=>{
				setTimeout(()=>{
					val=val+10;
					output.textContent=`Final Result: ${val}`
			        resolve(val);
				},1000)
			})
			
		})
		
})
var xhr = new XMLHttpRequest();
		xhr.open("GET","http://localhost:8081/audit");
		xhr.send();
		 
		xhr.onload = function(){
		var d=JSON.parse(xhr.response);
		console.log(d);
		
		var x=document.getElementById('table-head')	
	    x.innerHTML='<tr><th scope="col">PLAN ID</th><th scope="col">NAME</th><th scope="col">DESCRIPTION</th><th scope="col">VALIDITY</th></tr>';
	    
	    
	    var tbody=document.querySelector('.table > tbody')
	     
	    d.forEach((currentElement,index,arr) =>{
		
			console.log(currentElement);
			var tr=document.createElement('tr');
			var td1=document.createElement('td');
			td1.innerHTML=currentElement.id;
			var td2=document.createElement('td');
			td2.innerHTML=currentElement.operationType;
			var td3=document.createElement('td');
			td3.innerHTML=currentElement.entityJson;
			var td4=document.createElement('td');
			td4.innerHTML=currentElement.modificationDate;

			
			
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tbody.appendChild(tr);
		
		});
		}
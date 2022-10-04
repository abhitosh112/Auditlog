var xhr = new XMLHttpRequest();
		xhr.open("GET","http://localhost:8081/audit");
		xhr.send();
		 
		xhr.onload = function(){
		var d=JSON.parse(xhr.response);
		//console.log(d);
		
		var x=document.getElementById('table-head')	
	    x.innerHTML='<tr><th scope="col">LOG ID</th><th scope="col">OPERATION-TYPE</th><th scope="col">ENTITY-JSON</th><th scope="col">MODIFICATION-DATE</th></tr>';
	    
	    
	    var tbody=document.querySelector('.table > tbody')
	     
	    d.forEach((currentElement,index,arr) =>{
		
			console.log(currentElement.modificationDate);
			var tr=document.createElement('tr');
			var td1=document.createElement('td');
			td1.innerHTML=currentElement.id;
			var td2=document.createElement('td');
			td2.innerHTML=currentElement.operationType;
			var td3=document.createElement('td');
			td3.innerHTML=currentElement.entityJson;
			var td4=document.createElement('td');
			var x=currentElement.modificationDate;
			var date = new Date(x);//+ 'UTC');
			x=date.toString();
			var x=x.split(' ');
			td4.innerHTML=x[0]+'  '+x[1]+'  '+x[2]+' '+x[3]+'  '+x[4]+' '+x[5]+' IST';
			//var x=currentElement.modificationDate.split('T');
			//var x1=x[1].split('.');
			//td4.innerHTML=x[0]+'  '+x1[0]+'  '+x1[1];
			//td4.innerHTML=date;
		
			tr.appendChild(td1);
			tr.appendChild(td2);
			tr.appendChild(td3);
			tr.appendChild(td4);
			tbody.appendChild(tr);
		
		});
		}
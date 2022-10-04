//testing for git hub
	
	function getBYID()
     {
			console.log("outside");
			var type =document.getElementById('optype').value;
			type=type.toUpperCase();
			
			if(type.length!=0)
			{
				var xhr = new XMLHttpRequest();
				xhr.open("GET", "http://localhost:8081/audit", false);
				xhr.send();
				var mpList = xhr.response;
				var mobilePlans = JSON.parse(mpList);
				var flag = 0;
				
				
				
			var tbody=document.querySelector('.table > tbody')
		     
		   var x=document.getElementById('table-head-view')
       x.innerHTML='<tr><th scope="col">LOG ID</th><th scope="col">OPERATION-TYPE</th><th scope="col">ENTITY-JSON</th><th scope="col">MODIFICATION-DATE</th></tr>';
		   
		     while(tbody.firstChild)
		  {
			 tbody.removeChild(tbody.firstChild);
		  }
		  
				for (var i = 0; i < mobilePlans.length; i++)
				{
					if(mobilePlans[i].operationType==type)
					{
						console.log(mobilePlans[i].operationType);
						var tr=document.createElement('tr');
						var td1=document.createElement('td');
						td1.innerHTML=mobilePlans[i].id;
						var td2=document.createElement('td');
						td2.innerHTML=mobilePlans[i].operationType;
						var td3=document.createElement('td');
						td3.innerHTML=mobilePlans[i].entityJson;
						var td4=document.createElement('td');
						//td4.innerHTML=mobilePlans[i].modificationDate;
						var x=mobilePlans[i].modificationDate;
			            var date = new Date(x);
			                date.toString();
			                td4.innerHTML=date;
		
				
						tr.appendChild(td1);
						tr.appendChild(td2);
						tr.appendChild(td3);
						tr.appendChild(td4);
						//tbody.removeChild(tbody.childNodes[0]);
						tbody.appendChild(tr);
						//tbody.replaceChild(tr,tbody.childNodes[0]);
						flag=1;
						
			  		}		
	  			}
			
		        if(flag == 1)
		        {
					alert("Data is fetched");
				}
				else
				{
					var tableHead=document.getElementById('table-head-view')
					tableHead.innerHTML='';
					var noData=document.getElementById('table-section-noData')
					noData.innerHTML='<p align="center" style="color:black; align:center; font-weight:bolder">NO DATA PRESENT</p>';
					alert("OPERATION-TYPE not present");
				}
					
				}
			else
			{
				alert("Please enter valid OPERATION-TYPE");
			}
			
   	}			
		
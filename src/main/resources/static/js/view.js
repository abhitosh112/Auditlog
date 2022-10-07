//testing for git hub
	
	function getBYID()
     {
			console.log("outside");
			var type =document.getElementById('optype').value;
			type=type.toUpperCase();
			
			var dateInput=document.getElementById('dateId').value;
			if(dateInput!=""){
				var dateVar=new Date(dateInput);
				//console.log(dateVar);
				var date1=dateVar.getDate().toString() + dateVar.getMonth().toString() + dateVar.getFullYear().toString();
			}
			
			
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
					var dateVar1=new Date(mobilePlans[i].modificationDate);
					var date2=dateVar1.getDate().toString() + dateVar1.getMonth().toString() + dateVar1.getFullYear().toString();
					if(dateInput!="")
					{
						condition=(date1==date2);
					}
					else
					{
						condition=true;
					}
					if(mobilePlans[i].operationType==type && condition)
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
			            x=date.toString();
			            var x1=x.split(' ');
			            td4.innerHTML=x1[0]+'  '+x1[1]+'  '+x1[2]+' '+x1[3]+'  '+x1[4]+' '+x1[5]+' IST';
		
				
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
	  			const swalWithBootstrapButtons = Swal.mixin({
						customClass: {
						  confirmButton: 'btn btn-success',
						  cancelButton: 'btn btn-danger'
							},
						  buttonsStyling: false,
						  allowOutsideClick:false
					  });
			
		        if(flag == 1)
		        {
					var noData=document.getElementById('table-section-noData')
					noData.innerHTML='<p align="center" style="color:black; align:center; font-weight:bolder"></p>';
					swalWithBootstrapButtons.fire('Success!','Log searched.','success')
				}
				else
				{
					var tableHead=document.getElementById('table-head-view')
					tableHead.innerHTML='';
					var noData=document.getElementById('table-section-noData')
					noData.innerHTML='<p align="center" style="color:black; align:center; font-weight:bolder">NO DATA PRESENT</p>';
					swalWithBootstrapButtons.fire('Oops!','Log not available.','error')
				}
					
				}
			else
			{
				alert("Please enter valid OPERATION-TYPE");
			}
			
   	}			
		
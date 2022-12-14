package com.hansen.auditlog.ctrlr;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hansen.auditlog.dao.AuditlogDao;
import com.hansen.auditlog.model.Auditlog;
import com.hansen.auditlog.srvc.AuditlogService;
import java.util.Iterator;


@RestController
@RequestMapping("/audit")
public class AuditlogController {

	private Log logger = LogFactory.getLog(AuditlogController.class);
	@Autowired
	AuditlogService auditSrvc;

	@Autowired
	AuditlogDao auditlogDao;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Object> create(@RequestBody Auditlog inputentity) {
		logger.info("Inside add method");
		ResponseEntity<Object> mpResponse = null;

		//TODO fill in code
		Object auditLog=auditSrvc.create(inputentity);
		if(auditLog!=null)
		{
			mpResponse=new ResponseEntity<Object>(auditLog,null,HttpStatus.CREATED);
			return mpResponse;	
		}
		else
		{
			mpResponse=new ResponseEntity<Object>("cannot create log",null,HttpStatus.BAD_REQUEST);
			return mpResponse;	
		}
		
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> read(@PathVariable(value = "id") Long id) {
		logger.info("Inside getbyid method");
		ResponseEntity<Object> mpResponse = null;
		
		//TODO fill in code
		 
		Object auditId=auditSrvc.read(id);
         if(auditId==null)
         {
        	 mpResponse=new ResponseEntity<Object>("id not present",null,HttpStatus.NOT_FOUND);
        	 return mpResponse;
         }
         else
         {
        	 mpResponse=new ResponseEntity<Object>(auditId,null,HttpStatus.OK);
        	 return mpResponse; 
         }
}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Object> readAll() {
		logger.info("Inside readAll method");
		ResponseEntity<Object> mpResponse = null;
		ResponseEntity<Object> mpResponsee = null;
		//TODO fill in code
		
		Iterable<Auditlog>auditListAll=auditSrvc.readAll();
		Iterator<Auditlog>iterator=auditListAll.iterator();
		if(iterator.hasNext()==true)
		{
			mpResponse=new ResponseEntity<Object>(auditListAll,null,HttpStatus.OK);
			return mpResponse;
		}
		else
		{
			mpResponsee=new ResponseEntity<Object>("No plan",null,HttpStatus.NOT_FOUND);
			return mpResponsee;
		}
		
	}

}

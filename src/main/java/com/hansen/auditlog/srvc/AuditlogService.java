package com.hansen.auditlog.srvc;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hansen.auditlog.dao.AuditlogDao;
import com.hansen.auditlog.model.Auditlog;
//import com.hansen.mobileplan.model.MobilePlan;

@Service
public class AuditlogService {

	@Autowired
	AuditlogDao auditlogDao;

	public Object create(Auditlog entity) {

		//TODO fill in code
		Auditlog addd=auditlogDao.save(entity);
		return addd;
		
		
	}

	public Object read(Long id) {
		
		//TODO fill in code
		Optional<Auditlog> gett = auditlogDao.findById(id);
		if(gett.isPresent())
		{
			 return gett;
		}
		else
		{
		return null;
		}
	}

	public Iterable<Auditlog> readAll() {
		
		
		//TODO fill in code
		Iterable<Auditlog> gettall=auditlogDao.findAll();
		return gettall;
		
		
		
	}

	
}

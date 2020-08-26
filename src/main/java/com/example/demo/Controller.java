package com.example.demo;

import com.example.demo.dao.CompanyRepo;
import com.example.demo.model.Company;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@org.springframework.stereotype.Controller
public class Controller {

	@Autowired
	CompanyRepo repo;

	@RequestMapping("/api/addressbook")
	@ResponseBody
	public List<Company> getAddressbook() {
		//System.out.println("GET addressbook");
		return repo.findAll();
	}

	@PostMapping("/api/company")
	public Void createCompany(@RequestBody Company company) {
		//System.out.println(company);
		repo.save(company);
		return null;
	}

	@DeleteMapping("/api/delete/{id}")
	public Void deleteCompany(@PathVariable("id") int id) {
		//System.out.println("REMOVING "+id);
		repo.deleteById(id);
		return null;

	}
}

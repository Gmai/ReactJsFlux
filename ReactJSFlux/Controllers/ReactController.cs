using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactJSFlux.Controllers
{
	public class ReactController : Controller
	{
		// GET: React
		public ActionResult Index()
		{
			return View();
		}

		// GET: React
		public ActionResult Register()
		{
			return View();
		}

		// GET: React
		public ActionResult List()
		{
			return View();
		}

		[HttpGet]
		public JsonResult GetPrescribers(int clinicId) {
			List<Prescriber> prescribers = new List<Prescriber>() {
				new Prescriber(1,1,"Doctor 1","doc@1.com","111111111"),
				new Prescriber(2,2,"Nurse Practioner 1","nurseP@1.com",""),
				new Prescriber(3,1,"Doctor 2","doc@2.com","222222222"),
				new Prescriber(4,2,"Nurse Practioner 2","nurseP@2.com","")
			};

			return Json(prescribers, JsonRequestBehavior.AllowGet);
		}

		[HttpGet]
		public JsonResult GetSecondaryContact(int clinicId, int prescriberId)
		{
			List<SecondaryContact> secondarieContacts = new List<SecondaryContact>() {
				new SecondaryContact(5,2,"Nurse Practioner 3","nurseP@3.com"),
				new SecondaryContact(6,4,"Nurse 1","nurse@1.com"),
				new SecondaryContact(7,4,"Nurse 2","nurse@2.com"),
				new SecondaryContact(8,3,"Other 1","other@1.com")
			};

			return Json(secondarieContacts, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult SendData(Clinic clinic,Prescriber prescriber, SecondaryContact secondaryContact)
		{
			return Json("Ok", JsonRequestBehavior.AllowGet);
		}

		public class Prescriber
		{
			public int id { get; set; }
			public byte userType { get; set; }
			public string name { get; set; }
			public string email { get; set; }
			public string license { get; set; }

			public Prescriber() { }

			public Prescriber(int id, byte userType, string name, string email, string license)
			{
				this.id = id; this.userType = userType; this.name = name; this.email = email; this.license = license;
			}
		}

		public class SecondaryContact
		{
			public int id { get; set; }
			public byte userType { get; set; }
			public string name { get; set; }
			public string email { get; set; }

			public SecondaryContact() { }

			public SecondaryContact(int id, byte userType, string name, string email)
			{
				this.id = id; this.userType = userType; this.name = name; this.email = email;
			}
		}

		public class Clinic {
			public int id { get; set; }
			public string name { get; set; }
			public string postalcode { get; set; }
			public string province { get; set; }

			public Clinic() { }

			public Clinic(int id,string name, string postalcode, string province)
			{
				this.id = id;
				this.name = name;
				this.postalcode = postalcode ;
				this.province = province;
			}
		}
	}
}


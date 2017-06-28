using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MyFirstMvcEfAppProject.Models;
using Api = System.Web.Http;


namespace MyFirstMvcEfAppProject.Controllers
{
    public class purchaseRequestsController : Controller
    {
        private MyFirstMvcEfAppProjectContext db = new MyFirstMvcEfAppProjectContext();

        public ActionResult List() {
            return Json(db.purchaseRequests.ToList(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult ListByPurchaseRequest(int? id) {
            if (id == null)
                return new EmptyResult();
            var items = db.PurchaseRequestLineItems.Where(pr => pr.PurchaseRequestId == id).ToList();
            return Json(items, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Get(int? id) {
            return Json(db.purchaseRequests.Find(id), JsonRequestBehavior.AllowGet);
        }
        public ActionResult Remove(int? id) {
            if (id == null) {
                var rc = new Msg { Result = "Failed", Message = "No Id supplied" };
                return Json(rc, JsonRequestBehavior.AllowGet);
            }
            purchaseRequest purchaseRequest = db.purchaseRequests.Find(id);
            if (purchaseRequest == null) {
                return Json(new Msg { Result = "Failed", Message = $"PurchaseRequest not found for id {id}" }, JsonRequestBehavior.AllowGet);
            }
            db.purchaseRequests.Remove(purchaseRequest);
            db.SaveChanges();
            return Json(new Msg { Result = "OK", Message = "Successfully deleted" }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Add([Api.FromBody] purchaseRequest aPurchaseRequest) {
            if (aPurchaseRequest.Description == null) return Json(new Msg { Result = "Failure", Message = "aUser is empty" }, JsonRequestBehavior.AllowGet);
            db.purchaseRequests.Add(aPurchaseRequest);
            db.SaveChanges();
            return Json(new Msg { Result = "OK", Message = "Succesfully added" }, JsonRequestBehavior.AllowGet);
        }
        public ActionResult Change([Api.FromBody]purchaseRequest apurchaseRequest) {
            purchaseRequest purchaseRequest = db.purchaseRequests.Find(apurchaseRequest.ID);
            purchaseRequest.ID = apurchaseRequest.ID;
            purchaseRequest.Description = apurchaseRequest.Description;
            purchaseRequest.Justification = apurchaseRequest.Justification;
            purchaseRequest.DateNeeded = apurchaseRequest.DateNeeded;
            purchaseRequest.DeliveryMode = apurchaseRequest.DeliveryMode;
            purchaseRequest.DocsAttached = apurchaseRequest.DocsAttached;
            purchaseRequest.Status = apurchaseRequest.Status;
            purchaseRequest.Total = apurchaseRequest.Total;
            purchaseRequest.SubmittedDate = apurchaseRequest.SubmittedDate;
            db.SaveChanges();
            return Json(new Msg { Result = "OK", Message = "Successfully added" }, JsonRequestBehavior.AllowGet);
        }

        // GET: purchaseRequests
        public ActionResult Index()
        {
            return View(db.purchaseRequests.ToList());
        }

        // GET: purchaseRequests/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            purchaseRequest purchaseRequest = db.purchaseRequests.Find(id);
            if (purchaseRequest == null)
            {
                return HttpNotFound();
            }
            return View(purchaseRequest);
        }

        // GET: purchaseRequests/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: purchaseRequests/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,UserID,Description,Justification,DateNeeded,DeliveryMode,DocsAttached,Status,Total,SubmittedDate")] purchaseRequest purchaseRequest)
        {
            if (ModelState.IsValid)
            {
                db.purchaseRequests.Add(purchaseRequest);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(purchaseRequest);
        }

        // GET: purchaseRequests/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            purchaseRequest purchaseRequest = db.purchaseRequests.Find(id);
            if (purchaseRequest == null)
            {
                return HttpNotFound();
            }
            return View(purchaseRequest);
        }

        // POST: purchaseRequests/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,UserID,Description,Justification,DateNeeded,DeliveryMode,DocsAttached,Status,Total,SubmittedDate")] purchaseRequest purchaseRequest)
        {
            if (ModelState.IsValid)
            {
                db.Entry(purchaseRequest).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(purchaseRequest);
        }

        // GET: purchaseRequests/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            purchaseRequest purchaseRequest = db.purchaseRequests.Find(id);
            if (purchaseRequest == null)
            {
                return HttpNotFound();
            }
            return View(purchaseRequest);
        }

        // POST: purchaseRequests/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            purchaseRequest purchaseRequest = db.purchaseRequests.Find(id);
            db.purchaseRequests.Remove(purchaseRequest);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

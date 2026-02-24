
let jobs = [
{ id:1, companyName:"Mobile First Corp", position:"React Native Developer", location:"Remote", type:"Full-time", salary:"$130k - $175k", description:"Develop scalable cross-platform mobile apps used globally.", status:"none"},
{ id:2, companyName:"CloudNova Ltd", position:"Frontend Engineer", location:"Singapore", type:"Full-time", salary:"$90k - $120k", description:"Build modern UI using JavaScript and performance optimization.", status:"none"},
{ id:3, companyName:"DataBridge AI", position:"Machine Learning Intern", location:"Remote", type:"Internship", salary:"$25/hr", description:"Assist in training predictive AI models for analytics.", status:"none"},
{ id:4, companyName:"CyberShield", position:"Security Analyst", location:"Germany", type:"Full-time", salary:"$100k", description:"Monitor threats and strengthen enterprise security systems.", status:"none"},
{ id:5, companyName:"PixelCraft Studio", position:"UI/UX Designer", location:"Canada", type:"Contract", salary:"$70k", description:"Design intuitive user experiences for SaaS platforms.", status:"none"},
{ id:6, companyName:"FinEdge Bank", position:"Backend Developer", location:"UK", type:"Full-time", salary:"$110k", description:"Create secure APIs and financial transaction services.", status:"none"},
{ id:7, companyName:"HealthSync", position:"Software Engineer", location:"Remote", type:"Full-time", salary:"$105k", description:"Develop healthcare monitoring systems for hospitals.", status:"none"},
{ id:8, companyName:"GreenTech Energy", position:"Data Analyst", location:"Netherlands", type:"Hybrid", salary:"$80k", description:"Analyze renewable energy usage and forecasting data.", status:"none"},
{ id:9, companyName:"NextGen Robotics", position:"AI Software Engineer", location:"Japan", type:"Full-time", salary:"$140k", description:"Develop intelligent robotic systems using computer vision and deep learning.", status:"none"}
];

let activeTab = "all";

function updateActiveTabUI(){

  const buttons = document.querySelectorAll(".tabBtn");

  buttons.forEach(btn => {

    if(btn.dataset.tab === activeTab){
      btn.classList.remove("bg-gray-200");
      btn.classList.add("bg-blue-500","text-white");
    }else{
      btn.classList.remove("bg-blue-500","text-white");
      btn.classList.add("bg-gray-200");
    }

  });
}

function renderJobs(){

const container = document.getElementById("jobsContainer");

const filtered = jobs.filter(job =>
  activeTab === "all" ? true : job.status === activeTab
);

document.getElementById("tabCount").innerText =
filtered.length + " jobs";

if(filtered.length === 0){
container.innerHTML = `
<div class="col-span-full text-center bg-white p-10 rounded shadow">
<img src="Image/jobs.png" class="w-12 h-12 mx-auto mb-3"/>
<h3 class="text-xl font-semibold">No jobs available</h3>
<p class="text-gray-500">Check back soon for new job opportunities</p>
</div>`;
return;
}

container.innerHTML = filtered.map(job=>{

let badge="";

if(job.status==="none"){
badge=`<span class="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">NOT APPLIED</span>`;
}
else if(job.status==="interview"){
badge=`<span class="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">INTERVIEW</span>`;
}
else{
badge=`<span class="bg-red-100 text-red-700 px-3 py-1 rounded text-sm">REJECTED</span>`;
}

return `
<div class="bg-white p-4 rounded shadow">

<div class="flex justify-between items-start">
<h3 class="font-semibold text-lg">${job.companyName}</h3>

<button onclick="deleteJob(${job.id})"
class="p-2 rounded hover:bg-gray-200">
<img src="Image/Group-1.png" class="w-7 h-7"/>
</button>
</div>

<p class="text-lg mt-2">${job.position}</p>

<p class="text-sm text-gray-500">
${job.location} • ${job.type} • ${job.salary}
</p>

<div class="mt-2">${badge}</div>
<p class="my-2">${job.description}</p>

<div class="flex flex-col sm:flex-row gap-2 mt-3">

<button onclick="setStatus(${job.id},'interview')"
class="px-3 py-1 border rounded
${job.status==='interview'?'bg-green-500 text-white':''}">
Interview
</button>

<button onclick="setStatus(${job.id},'rejected')"
class="px-3 py-1 border rounded
${job.status==='rejected'?'bg-red-500 text-white':''}">
Rejected
</button>

</div>
</div>
`;

}).join("");
}

function setStatus(id,status){
const job = jobs.find(j=>j.id===id);
job.status = job.status===status ? "none" : status;
updateDashboard();
renderJobs();
}

function deleteJob(id){
jobs = jobs.filter(job=>job.id!==id);
updateDashboard();
renderJobs();
}

function updateDashboard(){
document.getElementById("totalCount").innerText = jobs.length;
document.getElementById("interviewCount").innerText =
jobs.filter(j=>j.status==="interview").length;
document.getElementById("rejectedCount").innerText =
jobs.filter(j=>j.status==="rejected").length;
}

function changeTab(tab){
activeTab = tab;
updateActiveTabUI();
renderJobs();
}

updateDashboard();
updateActiveTabUI();
renderJobs();
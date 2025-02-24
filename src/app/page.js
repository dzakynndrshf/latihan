import Image from "next/image";

const classes = [
  {
    name: "Kelas SI",
    friends: [
      { name: "Alwan", image: "/Alwan.jpg" },
      { name: "Ibnu", image: "/ibnu.jpg" },
      { name: "Farkhan", image: "/Farkhan.jpg" },
      { name: "Aziz", image: "/aziz.jpg" },
      { name: "Reggi", image: "/Reggi.jpg" },
    ],
  },
  {
    name: "Kelas KA",
    friends: [
      { name: "Siti", image: "/Siti.jpg" },
      { name: "Rendi", image: "/Rendi.png" },
      { name: "Hendrik", image: "/hendrik.jpg" },
      { name: "Titania", image: "/Titania.jpg" },
      { name: "Intan", image: "/intan.jpg" },
    ],
  },
  {
    name: "Kelas BD",
    friends: [
      { name: "Falah", image: "/falah.jpg" },
      { name: "Resa", image: "/resa.jpg" },
      { name: "Binarco", image: "/binarco.jpg" },
      { name: "Meylani", image: "/meylani.png" },
      { name: "Alpina", image: "/alpina.jpg" },
    ],
  },
];

function ClassCard({ classData }) {
  return (
    <div className="bg-green-100 p-6 rounded-xl shadow-lg w-full max-w-lg text-center">
      <h2 className="text-2xl font-bold text-green-700 mb-4">{classData.name}</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {classData.friends.map((friend, i) => (
          <div key={i} className="flex flex-col items-center w-20">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500 shadow-md">
              <Image
                src={friend.image}
                alt={friend.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-800">{friend.name}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
        + Assign Peserta Kelas
      </button>
    </div>
  );
}

export default function ClassProfiles() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center space-y-6">
      {classes.map((classData, index) => (
        <ClassCard key={index} classData={classData} />
      ))}
    </div>
  );
}
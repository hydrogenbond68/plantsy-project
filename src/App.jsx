import React, { useState } from 'react';

function AddPlant() {
  return <div>Name Plant</div>;
}

function Logo() {
  return (
    <div className="flex justify-center p-5">
      <h1 className="font-bold text-5xl"> Plantsy 🌱 </h1>
    </div>
  );
}

function PlantList() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 ">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://st3.depositphotos.com/13349494/36993/i/600/depositphotos_369934244-stock-photo-green-fresh-leaves-white-wall.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://st2.depositphotos.com/21936426/44482/i/600/depositphotos_444829030-stock-photo-trees-grow-naturally-good-quality.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://st.depositphotos.com/1743476/1262/i/600/depositphotos_12621249-stock-photo-new-life.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://st3.depositphotos.com/16122460/34603/i/600/depositphotos_346039074-stock-photo-beautiful-lush-tropical-leaves-isolated.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://st3.depositphotos.com/13349494/16764/i/600/depositphotos_167643512-stock-photo-potted-ficus-plant.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://www.realsimple.com/thmb/zwhZIwXxthTPr7sUIMBqOGQZoR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/caladium_0-e77057c604424098bfec2c859d3e60a0.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
         <img
          src="https://www.realsimple.com/thmb/uKisYtgDflpyy0sAf9ptdfVM0NI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/persian-shield_0-a2ce32d0239e45c8a5072842e9f25518.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
        <img
          src="https://www.realsimple.com/thmb/uKisYtgDflpyy0sAf9ptdfVM0NI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/persian-shield_0-a2ce32d0239e45c8a5072842e9f25518.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
           />
           <img
          src="https://st3.depositphotos.com/13349494/16764/i/600/depositphotos_167643512-stock-photo-potted-ficus-plant.jpg"
          alt=""
          className="w-full h-[250px] object-cover"
        />
      </div>

    </div>
    

    
  );
}

function SearchPlant({ searchInput, setSearchInput }) {
  return (
    <div>
      <h4 className="font-bold text-xl">Search Plants:</h4>
      <input
        type="text"
        placeholder="Type a name to search"
        className="border-b-3 border-gray-600 outline-none focus:border-green-500 w-full"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

    </div>
  );
}

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="px-10">
      <Logo />
      <AddPlant />
      <SearchPlant searchInput={searchInput} setSearchInput={setSearchInput}/>
      <PlantList />
    </main>
  );
}

export default App;
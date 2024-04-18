'use client';
import Button from '@/src/components/ui/Button';
import { FormEvent, useState } from 'react';

const Kontakt = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    console.log('Clicked!');
    setTimeout(() => {
      setLoading(false);
      console.log('Clicked 2!');
    }, 3000);
  };

  return (
    <div className="container min-h-screen space-y-8">
      <div className="xl:grid xl:grid-cols-2 h-full w-full xl:gap-8 xl:min-h-screen pt-28 pb-8 ">
        <div className="bg-brand-red w-full h-full"></div>
        <div className="w-full h-full xl:min-h-[700px] space-y-8 flex flex-col xl:justify-center items-start">
          <div className="text-4xl text-stone-900 font-fira-sans font-bold w-full text-center xl:text-left">
            Kontaktiraj Marka
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6 w-full"
          >
            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="polno-ime" className="font-medium">
                Polno ime
              </label>
              <input
                type="text"
                id="polno-ime"
                name="polno-ime"
                placeholder="npr. Janez Novak"
                required
                minLength={4}
                className="border py-2 px-4"
              />
            </div>
            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="zadeva" className="font-medium">
                Zadeva
              </label>
              <input
                type="text"
                id="zadeva"
                name="zadeva"
                placeholder="npr. Promocijsko sodelovanje"
                minLength={4}
                required
                className="border py-2 px-4"
              />
            </div>
            <div className="flex flex-col w-full gap-1.5">
              <label htmlFor="sporocilo" className="font-medium">
                Sporočilo
              </label>
              <textarea
                id="sporocilo"
                name="sporocilo"
                placeholder="Pozdravljeni, pišem vam ker..."
                className="border py-2 px-4"
                minLength={30}
                required
                rows={8}
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" disabled={loading}>
                {loading ? 'Pošiljam...' : 'Pošlji'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;

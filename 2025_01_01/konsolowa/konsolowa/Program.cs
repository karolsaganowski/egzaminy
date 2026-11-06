// See https://aka.ms/new-console-template for more information


tablicaManager manager = new tablicaManager(40);
manager.zapisz();
manager.wypisz();
manager.znajdz(2);
manager.nieparzyste();
manager.srednia();

class tablicaManager(int rozmiar)
{
    private int[] tablica = new int[rozmiar];
    private Random random = new Random();
    /**********************************************
    nazwa metody: zapisz
    opis metody: wpisuje do tablicy losowe liczby
    parametry: brak
    zwracany typ i opis: brak
    autor: 22
    ***********************************************/
    public void zapisz() {
        for (int i = 0; i <= tablica.Length-1; i++)
        {
            tablica[i] = random.Next(1000);
        }
    }
    /**********************************************
    nazwa metody: wypisz
    opis metody: wypisuje do konsoli wszystkie liczby
    parametry: brak
    zwracany typ i opis: brak
    autor: 22
    ***********************************************/
    public void wypisz()
    {
        int i = 1;
        foreach (int e in tablica)
        {
            Console.WriteLine(i+": "+e);
            i++;
        }
    }
    /**********************************************
    nazwa metody: znajdz
    opis metody: znajduje daną liczbę w tablicy
    parametry: szukane - szukana liczba
    zwracany typ i opis: int - pozycja liczby szukanej, lub -1 jeśli nie ma jej w tablicy
    autor: 22
    ***********************************************/
    public int znajdz(int szukane)
    {
        foreach (int e in tablica)
        {
            if(e == szukane)
            {
                Console.WriteLine("Znaleziono szukaną na pozycji "+e);
                return e;
            }
        }
        return -1;
    }
    /**********************************************
    nazwa metody: nieparzyste
    opis metody: wypisuje wszystkie liczby nieparzyste i zwraca ich ilośc
    parametry: brak
    zwracany typ i opis: brak
    autor: 22
    ***********************************************/
    public void nieparzyste()
    {
        int suma = 0;
        Console.WriteLine("Liczby nieparzyste:");
        foreach(int e in tablica)
        {
            if(e % 2 == 1)
            {
                Console.WriteLine(e);
                suma ++;
            }
        }
        Console.WriteLine("Razem nieparzystych: "+suma);
    }
    /**********************************************
    nazwa metody: srednia
    opis metody: oblicza średnią liczb w tablicy
    parametry: brak
    zwracany typ i opis: brak
    autor: 22
    ***********************************************/
    public void srednia()
    {
        int suma = 0;
        foreach (int e in tablica)
        {
            suma = suma + e;
        }
        Console.WriteLine("Średnia arytmetyczna wynosi: "+(suma/tablica.Length));
    }
    
}
using System.Runtime.InteropServices;

string w = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
List<string> wList = new List<string>();

foreach(char ch in w)
{
    wList.Add(ch.ToString());
}

string m = "abcdefghijklmnopqrstuvwxyz";
List<string> mList = new List<string>();

foreach (char ch in m)
{
    mList.Add(ch.ToString());
}

string d = "ąęłńóżźĄĘŁŃÓŻŹ";
List<string> dList = new List<string>();

foreach (char ch in d)
{
    dList.Add(ch.ToString());
}

string c = "0123456789";
List<string> cList = new List<string>();

foreach (char ch in c)
{
    cList.Add(ch.ToString());
}

string s = "!@#$%^&*()_+";
List<string> sList = new List<string>();

foreach (char ch in s)
{
    sList.Add(ch.ToString());
}
Random rnd = new Random();


for(int i =1; i<=5; i++)
{
    Console.WriteLine($"Hasło nr {i}: {generuj()}");
}
// nazwa funkcji: generuj
// opis funkcji: Genreuje hasło wedłóg kryteriów podanych w zadaniu
// parametry: brak
// zwracany typ i opis: string - wygenerowane hasło
// autor: karol saganowski
string generuj()
{
    string haslo = "";
    List<int> typy = new List<int>() { 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5 };
    int typyCount = typy.Count - 1;
    for (int i = 0; i <= typyCount; i++)
    {
        int rng = rnd.Next(typy.Count);
        if (typy[rng] == 1)
        {
            haslo += mList[rnd.Next(mList.Count)];
        }
        else if (typy[rng] == 2)
        {
            haslo += wList[rnd.Next(wList.Count)];
        }
        else if (typy[rng] == 3)
        {
            haslo += dList[rnd.Next(dList.Count)];
        }
        else if (typy[rng] == 4)
        {
            haslo += cList[rnd.Next(cList.Count)];
        }
        else if (typy[rng] == 5)
        {
            haslo += sList[rnd.Next(sList.Count)];
        }
        typy.RemoveAt(rng);
    }
    return haslo;
}
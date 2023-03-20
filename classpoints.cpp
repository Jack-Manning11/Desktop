// Compile using: g++ -std=c++17 classpoints.cpp
// Run using: ./a.out

#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    string people[13] = {"Jack", "Elle", "Mia", "Esther", "Alex", "Ella", "Dahn", "Sammy", "Seneca", "Auto", "Ashley", "Sophie", "Ethan"};
    int scores[13] = {0, 3, 1, -3, 0, 0, 0, 0, 3, 1, 1, 1, 3};
    string temp_name;
    int temp_points;
    char a_or_s;
    int points_change;
    int cont = 0;
    char y_or_n;

    for(int c = 0; c < 13; c++)
    {
        cout << "Please enter how many points " << people[c] << " had at the end of last class (as a whole number):" << endl;
        cin >> temp_points;

        scores[c] = temp_points;
    }

    while(cont == 0)
    {
        cout << "Whose score would you like to change?" << endl;
        cin >> temp_name;

        while(temp_name != "Jack" && temp_name != "Elle" && temp_name != "Mia" && temp_name != "Esther" && temp_name != "Alex" && temp_name != "Ella" && temp_name != "Dahn" && temp_name != "Sammy" && temp_name != "Seneca" &&  temp_name != "Auto" && temp_name != "Ashley" && temp_name != "Sophie" && temp_name != "Ethan")
        {
            cout << "Invalid name (make sure the first letter is capitalized). Try again:" << endl;
            cin >> temp_name;
        }

        cout << "Would you like to add or subtract from " << temp_name << "'s score? (A for add and S for subtract)" << endl;
        cin >> a_or_s;

        while(a_or_s != 'A' && a_or_s != 'S')
        {
            cout << "Invalid character (use A or S). Try again:" << endl;
            cin >> a_or_s;
        }

        cout << "How many points would you like to add/subtract? (enter a positive number)" << endl;
        cin >> points_change;

        while(points_change <= 0)
        {
            cout << "Please enter a positive number:" << endl;
            cin >> points_change;
        }

        if(temp_name == people[0])
        {
            if(a_or_s == 'A')
            {
                scores[0] += points_change;
            }
            else
            {
                scores[0] -= points_change;
            }
        }
        else if(temp_name == people[1])
        {
            if(a_or_s == 'A')
            {
                scores[1] += points_change;
            }
            else
            {
                scores[1] -= points_change;
            }
        }
        else if(temp_name == people[2])
        {
            if(a_or_s == 'A')
            {
                scores[2] += points_change;
            }
            else
            {
                scores[2] -= points_change;
            }
        }
        else if(temp_name == people[3])
        {
            if(a_or_s == 'A')
            {
                scores[3] += points_change;
            }
            else
            {
                scores[3] -= points_change;
            }
        }
        else if(temp_name == people[4])
        {
            if(a_or_s == 'A')
            {
                scores[4] += points_change;
            }
            else
            {
                scores[4] -= points_change;
            }
        }
        else if(temp_name == people[5])
        {
            if(a_or_s == 'A')
            {
                scores[5] += points_change;
            }
            else
            {
                scores[5] -= points_change;
            }
        }
        else if(temp_name == people[6])
        {
            if(a_or_s == 'A')
            {
                scores[6] += points_change;
            }
            else
            {
                scores[6] -= points_change;
            }
        }
        else if(temp_name == people[7])
        {
            if(a_or_s == 'A')
            {
                scores[7] += points_change;
            }
            else
            {
                scores[7] -= points_change;
            }
        }
        else if(temp_name == people[8])
        {
            if(a_or_s == 'A')
            {
                scores[8] += points_change;
            }
            else
            {
                scores[8] -= points_change;
            }
        }
        else if(temp_name == people[9])
        {
            if(a_or_s == 'A')
            {
                scores[9] += points_change;
            }
            else
            {
                scores[9] -= points_change;
            }
        }
        else if(temp_name == people[10])
        {
            if(a_or_s == 'A')
            {
                scores[10] += points_change;
            }
            else
            {
                scores[10] -= points_change;
            }
        }
        else if(temp_name == people[11])
        {
            if(a_or_s == 'A')
            {
                scores[11] += points_change;
            }
            else
            {
                scores[11] -= points_change;
            }
        }
        else if(temp_name == people[12])
        {
            if(a_or_s == 'A')
            {
                scores[12] += points_change;
            }
            else
            {
                scores[12] -= points_change;
            }
        }

        if(a_or_s == 'A')
        {
            cout << "Successfully improved " << temp_name << "'s worth!" << endl;
        }
        else
        {
            cout << "Successfully deemed " << temp_name << " as a loser!" << endl;
        }

        cout << endl;
        cout << "Current standings:" << endl;

        for(int l = 0; l < 13; l++)
        {
            cout << people[l] << ": " << scores[l] << endl;
        }

        cout << endl;
        cout << "Would you like to continue? (Y or N):" << endl;
        cin >> y_or_n;

        while(y_or_n != 'Y' && y_or_n != 'N')
        {
            cout << "Invalid input. Please enter Y or N:" << endl;
            cin >> y_or_n;
        }

        if(y_or_n == 'N')
        {
            cout << "Here are today's final results:" << endl;
            
            for(int i = 0; i < 13; i++)
            {
                cout << people[i] << ": " << scores[i] << endl;
            }
            
            cont = 1;
        }
        else
        {
            cout << "Let's do it again." << endl;
        }
    }

    return 0;
}
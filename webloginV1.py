import random
import time


def createNew(previousAccounts):
    userName = ""
    while True:
       userName = input("userName: ")
       if userName in previousAccounts:
            print(f"\n{userName} is already a username")
            print("please enter a diffrent one")
       else:
            break

    password = input("password: ")
    paid = input("would you like to pay: ")
    if paid == "yes":
        paid = "p"
    else:
        paid = "u"
    list = [userName, password, paid]
    for i in range(0,2):
        print()
    Data = open("data.txt","r+")

    lineOn = 1
    savedList = []
    currentWord = "hello"
    while currentWord != "":
        currentWord = Data.readline(lineOn)
        print(currentWord)
        print("yes")
        savedList.append(currentWord)
        lineOn += 1
    Data.close()
    print(savedList)
    Data = open("data.txt", "w")
    anotherCount = 0
    while anotherCount < lineOn:
        Data.write(f"{savedList[anotherCount]}\n")
        anotherCount += 1
        print("cycle")
    
    Data.writelines(f"{userName}\n")
    Data.writelines(f"{password}\n")
    Data.writelines(f"{paid}\n")
    Data.writelines(f"")
    Data.close()

    return(list)


#-----------------------------------------------------------#

def main():
    userNames = ["hello", "hi", "helloo", "charlie.ahn"]
    passwords = ["passwords", "thingy", "passwords", "passwords"]
    status = ["p", "u", "p", "p"]

    create = input("would you like to create an account with us? (yes or no)")
    if create == "yes":
        newAccount = createNew(userNames)
    userNames.append(newAccount[0])
    passwords.append(newAccount[1])
    status.append(newAccount[2])

    numberVar = 0
    enteredName = input("username: ")
    enteredPassword = input("password: ")
    time.sleep(.5)
    if enteredName.casefold() in userNames:
        for thing in userNames:
            if thing == enteredName.casefold():
                break
            numberVar += 1
        if passwords[numberVar] ==  enteredPassword:
            print("\nlogin success")
            time.sleep(1)

            if status[numberVar] == "p":
                print("\nwelcome.")
            else:
                print("\nno payment recieved")
        else:
            print(f"\nincorrect password")
    else:
        print(f"\nenter valid username")

main()

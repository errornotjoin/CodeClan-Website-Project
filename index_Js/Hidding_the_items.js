var t = 4 
var Empyt_Items = "Main_Items_"
var The_input_item = document.getElementById("Looking_for_the_items")
var Save_The_Name_of_The_Food_Place = ""
function Truning_all_off(Numbers, Meun )
{
    Save_The_Name_of_The_Food_Place = Meun
    for(var x = 0; x <= t; x++)
    {
        var Meun_items = document.getElementById(Empyt_Items + x)
        if(x == Numbers )
        {

            Meun_items.style.display = "inline-block"
        }
        else
        {   

            Meun_items.style.display = "none"
        }

    }
}
function Food_Find_name_oF_that_Thing(The_Name_Holders)
{
    for(var y = 0; y <= 6; y++)
    {
        var The_Name_Holder = document.getElementById("The_Name_Holder_" +  y )
        var Meun_items = document.getElementById("Place_Name_" + y)
        if(Meun_items.textContent == The_input_item.value || The_Name_Holders == true)
        {
           
            The_Name_Holder.style.display = "inline-block"
        }
        else
        {
            The_Name_Holder.style.display = "none"
        }
        }
}
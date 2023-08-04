
function Truning_all_off(Numbers)
{
    for(var x = 0; x <= 4; x++)
    {
        var Meun_items = document.getElementById("Main_Items_" + x)
        if(x == Numbers)
        {

            Meun_items.style.display = "inline-block"
        }
        else
        {   

            Meun_items.style.display = "none"
        }

    }
}